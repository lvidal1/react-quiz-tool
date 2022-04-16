import React from "react";

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Question from '../components/question';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Question',
    component: Question,
} as ComponentMeta<typeof Question>;

const dummyQuestion = {
    id: (new Date).toDateString(),
    title: "new question",
    options: [
        { title: "Option 1" },
        { title: "Option 2" },
    ]
}

export const Basic: ComponentStory<typeof Question> = () => <Question question={dummyQuestion} />;