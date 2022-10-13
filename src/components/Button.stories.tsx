import { Meta, StoryObj } from '@storybook/react'
import { Button, IButtonProps } from './Button';


export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
  },
  argTypes: {
  }
} as Meta<IButtonProps>

// Precisa exportar uma variante do componente
export const Default: StoryObj<IButtonProps> = {}

