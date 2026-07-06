import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import('../../../node_modules/react').ForwardRefExoticComponent<import('./Select').SelectProps & import('../../../node_modules/react').RefAttributes<HTMLSelectElement>>;
    tags: string[];
    args: {
        label: string;
        placeholder: string;
        defaultValue: string;
        options: {
            label: string;
            value: string;
        }[];
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Playground: Story;
export declare const WithHint: Story;
//# sourceMappingURL=Select.stories.d.ts.map