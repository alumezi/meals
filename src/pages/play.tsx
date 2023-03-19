import type { GetStaticProps } from "next";
import React, { useState } from "react";
import Dilemma from "../components/Dilemma";
import { Result } from "../components/Result";
import CopyLinkButton from "../components/CopyLinkButton";
import type { Challenge } from "../types/common";

interface Props {
  challenges: Challenge[];
}

const Play = ({ challenges }: Props) => {
  const [position, setPositon] = useState(0);
  const challenge = challenges[position];

  const handleSelectChoice = (id: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (position === 0) {
      searchParams.delete("choices");
    }

    const previousData: string[] = JSON.parse(
      decodeURIComponent(searchParams.get("choices") || "[]")
    ) as string[];

    const current = [id, ...previousData];

    searchParams.delete("choices");
    searchParams.append("choices", encodeURIComponent(JSON.stringify(current)));

    const newSearch = searchParams.toString();

    window.history.replaceState({}, "", `${location.pathname}?${newSearch}`);

    setPositon((prev) => prev + 1);
  };

  if (position === challenges.length) {
    const searchParams = new URLSearchParams(window.location.search);
    const choices: string[] = JSON.parse(
      decodeURIComponent(searchParams.get("choices") || "[]")
    ) as string[];

    const incomingChoices: string[] = JSON.parse(
      decodeURIComponent(searchParams.get("incomingChoices") || "[]")
    ) as string[];

    if (choices?.length && incomingChoices?.length) {
      return (
        <Result
          undecodedChoices={searchParams.get("choices") || "[]"}
          choices={choices}
          incomingChoices={incomingChoices}
        />
      );
      //if both are present we do the calculation
    } else if (choices?.length && !incomingChoices?.length) {
      //prepare for share
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.append(
        "incomingChoices",
        encodeURIComponent(JSON.stringify(choices))
      );
      searchParams.delete("choices");
      const newSearch = searchParams.toString();
      window.history.replaceState({}, "", `${location.pathname}?${newSearch}`);
      return (
        <div className="flex h-screen flex-col items-center justify-center">
          <CopyLinkButton
            textToCopy={window.location.href}
            message="Share the link with someone you would like to play with!"
          />
        </div>
      );
    }
  }

  if (!challenge) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <CopyLinkButton
          textToCopy={window.location.href}
          message="Share the link with someone you would like to play with!"
        />
      </div>
    );
  }

  return (
    <Dilemma
      key={challenge.id}
      firstChoice={challenge.firstChoice}
      secondChoice={challenge.secondChoice}
      onSelectChoice={handleSelectChoice}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const getData = async () => {
    return new Promise((res, rej) => {
      res([
        {
          id: "1",
          firstChoice: {
            id: "first-choice-1123",
            text: "Would you rather be in a Rock Band",
            randomColorNumber: Math.floor(Math.random() * 9),
          },
          secondChoice: {
            id: "second-choice123",
            text: "or a Jazz Band",
            randomColorNumber: Math.floor(Math.random() * 9),
          },
        },
        {
          id: "2",
          firstChoice: {
            id: "fist-choice3",
            text: "Would you rather never get tired",
            randomColorNumber: Math.floor(Math.random() * 9),
          },
          secondChoice: {
            id: "secon-choic123",
            text: "or never have to go to the bathroom",
            randomColorNumber: Math.floor(Math.random() * 9),
          },
        },
        {
          id: "3",
          firstChoice: {
            id: "fst-choice-1123",
            text: "Would you rather be rejected never again",
            randomColorNumber: Math.floor(Math.random() * 9),
          },
          secondChoice: {
            id: "se-choice123",
            text: "Never fail in your career",
            randomColorNumber: Math.floor(Math.random() * 9),
          },
        },
        {
          id: "4",
          firstChoice: {
            id: "first-choce-1123",
            text: "Would you rather have a face that everyone laughs at",
            randomColorNumber: Math.floor(Math.random() * 9),
          },
          secondChoice: {
            id: "second-cice123",
            text: "Have a name that everyone laughs at",
            randomColorNumber: Math.floor(Math.random() * 9),
          },
        },
        {
          id: "123",
          firstChoice: {
            id: "first-23",
            text: "Live in a country with a low cost of living but horrible weather",
            randomColorNumber: Math.floor(Math.random() * 9),
          },
          secondChoice: {
            id: "second-choe123",
            text: "Live in a country with high cost of living and amazing weather",
            randomColorNumber: Math.floor(Math.random() * 9),
          },
        },
      ]);
    });
  };

  const challenges = await getData();

  return {
    props: {
      challenges,
    },
  };
};

export default Play;
