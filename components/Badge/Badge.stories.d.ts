import { StoryObj } from '@storybook/react';
import { Badge } from './Badge';
declare const meta: {
    title: string;
    component: typeof Badge;
    tags: string[];
    args: {
        children: string;
        tone: "success";
    };
    argTypes: {
        tone: {
            control: "select";
            options: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Playground: Story;
export declare const Tones: Story;
//# sourceMappingURL=Badge.stories.d.ts.map