import React from "react";

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Question from '../components/question';

const getUniqueID = () => Date.now() + ((Math.random() * 100000).toFixed());

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Question',
    component: Question,
} as ComponentMeta<typeof Question>;

const testQuestion = {
    id: getUniqueID(),
    title: "Mark all correct answers",
    options: [
        { id: getUniqueID(), title: "Option 1" },
        { id: getUniqueID(), title: "Option 2" },
    ]
}

export const Basic: ComponentStory<typeof Question> = () => <Question question={testQuestion} />;