import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { publicFetch } from "@utils/service";
import Layout from "@components/layout";
import QuestionWrapper from "@components/question/question-wrapper";
import QuestionStats from "@components/question/question-stats";
import QuestionSummary from "@components/question/question-summary";
import PageTitle from "@components/page-title";
import ButtonGroup from "@components/button-group";
import { Spinner } from "@components/icons";
import type { FiltersType } from "types";

export default function Home() {
  const router = useRouter();
  const [questions, setQuestions] = useState([]);
  const [sortType, setSortType] = useState("Votes");

  useEffect(() => {
    const fetchQuestion = async () => {
      const { data } = await publicFetch.get("/question");
      setQuestions(data);
    };

    const fetchQuestionByTag = async () => {
      const { data } = await publicFetch.get(`/questions/${router.query.tag}`);
      setQuestions(data);
    };

    if (router.query.tag) {
      fetchQuestionByTag();
    } else {
      fetchQuestion();
    }
  }, [router.query.tag]);

  const handleSorting = () => {
    switch (sortType) {
      case "Votes":
        return (a: FiltersType, b: FiltersType) => b.score - a.score;
      case "Views":
        return (a: FiltersType, b: FiltersType) => b.views - a.views;
      case "Newest":
        return (a: FiltersType, b: FiltersType) =>
          new Date(b.created).valueOf() - new Date(a.created).valueOf();
      case "Oldest":
        return (a: FiltersType, b: FiltersType) =>
          new Date(a.created).valueOf() - new Date(b.created).valueOf();
      default:
        break;
    }
  };

  const title = router.query.tag ? router.query.tag : "Questions";

  return (
    <>
      <Layout>
        <Head>
          <title>{`${title} - Cakrawala Achieve`}</title>
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
        <PageTitle
          title={
            router.query.tag
              ? `Questions tagged [${router.query.tag}]`
              : "All Questions"
          }
          button
          borderBottom={false}
        />

        <ButtonGroup
          borderBottom
          buttons={["Votes", "Views", "Newest", "Oldest"]}
          selected={sortType}
          setSelected={setSortType}
        />

        {!questions && (
          <div className="loading">
            <Spinner />
          </div>
        )}

        {questions
          ?.sort(handleSorting())
          .map(
            ({
              id,
              votes,
              answers,
              views,
              title,
              text,
              tags,
              author,
              created,
            }: FiltersType) => (
              <QuestionWrapper key={id}>
                <QuestionStats
                  voteCount={votes.length}
                  answerCount={answers.length}
                  view={views}
                />
                <QuestionSummary
                  id={id}
                  title={title}
                  tags={tags}
                  author={author}
                  createdTime={created}
                >
                  {text}
                </QuestionSummary>
              </QuestionWrapper>
            )
          )}
      </Layout>
    </>
  );
}
