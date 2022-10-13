import { Meta, StoryObj } from '@storybook/react'

import { Text, ITextProps } from "./Text";

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<ITextProps>

// Precisa exportar uma variante do componente
export const Default: StoryObj<ITextProps> = {}

export const Small: StoryObj<ITextProps> = {
  args: {
    size: 'sm'
  }
}

export const Large: StoryObj<ITextProps> = {
  args: {
    size: 'lg'
  }
}

export const CustomCompoment: StoryObj<ITextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Text with Paragraph</p>
    )
  },
  // Remove o control do preview do storyBook
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}
