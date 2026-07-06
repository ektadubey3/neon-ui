import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import('../../../node_modules/react').ForwardRefExoticComponent<import('./Button').ButtonProps & import('../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
    tags: string[];
    args: {
        children: string;
        variant: "primary";
        size: "md";
    };
    argTypes: {
        variant: {
            control: "select";
            options: string[];
        };
        size: {
            control: "inline-radio";
            options: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Playground: Story;
export declare const Variants: Story;
export declare const Loading: Story;
//# sourceMappingURL=Button.stories.d.ts.map