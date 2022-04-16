import React from "react";
import { render, screen } from "@testing-library/react";

import Question from "./index";

describe("Question Mount", () => {
    it("must display the question title", () => {

        const dummyQuestion = {
            id: (new Date).toDateString(),
            title: "new question"
        }

        render(<Question question={dummyQuestion} />);
        expect(screen.getByRole("heading", { name: /new question/i })).toBeInTheDocument();
    });
});