import { StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
declare const meta: {
    title: string;
    component: typeof Tabs;
    tags: string[];
    args: {
        items: {
            id: string;
            label: string;
            content: string;
        }[];
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Playground: Story;
//# sourceMappingURL=Tabs.stories.d.ts.map