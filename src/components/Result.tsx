import CopyLinkButton from "./CopyLinkButton";

interface Props {
  choices: string[];
  incomingChoices: string[];
  undecodedChoices: string;
}

export const Result = ({
  choices,
  incomingChoices,
  undecodedChoices,
}: Props) => {
  //find percentage by finding common elements
  const result =
    (choices.reduce((acc, curr) => {
      if (incomingChoices.includes(curr)) {
        return acc + 1;
      }
      return acc;
    }, 0) /
      choices.length) *
    100;

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center bg-white text-9xl text-[hsl(280,100%,70%)]">
        {result}%
        <div className="mt-1 px-2 text-center text-sm text-gray-600">
          Of the answers were the same with the person that sent you the link!
        </div>
      </div>
      <div className="mt-40">
        <CopyLinkButton
          textToCopy={`${location.origin}${location.pathname}?incomingChoices=${undecodedChoices}`}
          iconWidth="50px"
          iconHeight="50px"
          message="Share this link with someone you would like to play with!"
        />
      </div>
    </div>
  );
};
