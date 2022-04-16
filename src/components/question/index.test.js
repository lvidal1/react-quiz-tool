import React from "react";
import { render, screen } from "@testing-library/react";

import Question from "./index";

describe("<Question />", () => {
    it("must display the question title", () => {

        const dummyQuestion = {
            id: (new Date).toDateString(),
            title: "new question",
            options: []
        }

        render(<Question question={dummyQuestion} />);
        expect(screen.getByRole("heading", { name: /new question/i })).toBeInTheDocument();
    });

    it("must display 2 options", () => {

        const dummyQuestion = {
            id: (new Date).toDateString(),
            title: "new question",
            options: [
                { title: "Option 1" },
                { title: "Option 2" },
            ]
        }

        render(<Question question={dummyQuestion} />);
        expect(screen.queryAllByRole('checkbox')).toHaveLength(2);
    })
});