import { useEffect, useState } from "react";
import Head from "next/head";
import { publicFetch } from "@utils/service";
import Layout from "@components/layout";
import PageTitle from "@components/page-title";
import DetailPageContainer from "@components/detail-page-container";
import PostWrapper from "@components/post/post-wrapper";
import PostVote from "@components/post/post-vote";
import PostSummary from "@components/post/post-summary";
import CommentList from "@components/post/comment-list";
import CommentItem from "@components/post/comment-list/comment-item";
import AnswerContainer from "@components/answer-container";
import AddAnswer from "@components/add-answer";
import { Spinner } from "@components/icons";

type filters = {
  id: number;
  score: number;
  votes: number[];
  answers: number[];
  views: number;
  title: string;
  text: string;
  tags: string[];
  author: any;
  created: Date;
  comments: any[];
};

const QuestionDetail = ({ questionId, title }: any) => {
  const [question, setQuestion] = useState<filters>();
  const [answerSortType, setAnswersSortType] = useState("Votes");

  useEffect(() => {
    const fetchQuestion = async () => {
      const { data } = await publicFetch.get(`/question/${questionId}`);
      setQuestion(data);
    };

    fetchQuestion();
  }, [questionId]);

  const handleSorting = () => {
    switch (answerSortType) {
      case "Votes":
        return (a: any, b: any) => b.score - a.score;
      case "Newest":
        return (a: any, b: any) =>
          new Date(b.created).valueOf() - new Date(a.created).valueOf();
      case "Oldest":
        return (a: any, b: any) =>
          new Date(a.created).valueOf() - new Date(b.created).valueOf();
      default:
        break;
    }
  };

  const isClient = typeof window === "object";

  return (
    <>
      <Layout extra={false}>
        <Head>
          <title>{title}</title>
          {isClient && (
            <link rel="canonical" href={window.location.href}></link>
          )}
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="icon"
            type="image/png"
            href="/icon/favicon-196x196.png"
            sizes="196x196"
          />
          <link
            rel="icon"
            type="image/png"
            href="/icon/favicon-96x96.png"
            sizes="96x96"
          />
          <link
            rel="icon"
            type="image/png"
            href="/icon/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/icon/favicon-16x16.png"
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href="/icon/favicon-128.png"
            sizes="128x128"
          />
        </Head>

        <PageTitle title={title} button />

        <DetailPageContainer>
          {!question && (
            <div className="loading">
              <Spinner />
            </div>
          )}

          {question && (
            <>
              <PostWrapper borderBottom={false}>
                <PostVote
                  score={question.score}
                  votes={question.votes}
                  questionId={questionId}
                  setQuestion={setQuestion}
                />
                <PostSummary
                  tags={question.tags}
                  author={question.author}
                  created={question.created}
                  questionId={questionId}
                >
                  {question.text}
                </PostSummary>
                <CommentList questionId={questionId} setQuestion={setQuestion}>
                  {question.comments.map(
                    ({ id, author, created, body }: any) => (
                      <CommentItem
                        key={id}
                        commentId={id}
                        questionId={questionId}
                        author={author.username}
                        isOwner={author.username === question.author.username}
                        // isOwner={author.username === question.author.username}

                        created={created}
                        setQuestion={setQuestion}
                      >
                        {body}
                      </CommentItem>
                    )
                  )}
                </CommentList>
              </PostWrapper>

              {question.answers.length > 0 && (
                <AnswerContainer
                  answersCount={question.answers.length}
                  answerSortType={answerSortType}
                  setAnswerSortType={setAnswersSortType}
                >
                  {question.answers.sort(handleSorting()).map((answer: any) => (
                    <PostWrapper key={answer.id}>
                      <PostVote
                        score={answer.score}
                        votes={answer.votes}
                        answerId={answer.id}
                        questionId={questionId}
                        setQuestion={setQuestion}
                      />
                      <PostSummary
                        author={answer.author}
                        created={answer.created}
                        questionId={questionId}
                        answerId={answer.id}
                        setQuestion={setQuestion}
                      >
                        {answer.text}
                      </PostSummary>
                      <CommentList
                        questionId={questionId}
                        answerId={answer.id}
                        setQuestion={setQuestion}
                      >
                        {answer.comments.map(
                          ({ id, author, created, body }: any) => (
                            <CommentItem
                              key={id}
                              commentId={id}
                              questionId={questionId}
                              answerId={answer.id}
                              author={author.username}
                              isOwner={
                                author.username === question.author.username
                              }
                              created={created}
                              setQuestion={setQuestion}
                            >
                              {body}
                            </CommentItem>
                          )
                        )}
                      </CommentList>
                    </PostWrapper>
                  ))}
                </AnswerContainer>
              )}

              <AddAnswer
                tags={question.tags}
                id={questionId}
                setQuestion={setQuestion}
              />
            </>
          )}
        </DetailPageContainer>
      </Layout>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const slug = context.params.slug;
  const questionId = slug.split("-").shift();
  const title = slug
    ?.substr(slug.indexOf("-") + 1)
    .split("-")
    .join(" ");

  return {
    props: {
      questionId,
      title,
    },
  };
}

export default QuestionDetail;
