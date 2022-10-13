import { Meta, StoryObj } from '@storybook/react'

import { Heading, IHeadingProps } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
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
} as Meta<IHeadingProps>

// Precisa exportar uma variante do componente
export const Default: StoryObj<IHeadingProps> = {}

export const Small: StoryObj<IHeadingProps> = {
  args: {
    size: 'sm'
  }
}

export const Large: StoryObj<IHeadingProps> = {
  args: {
    size: 'lg'
  }
}

export const CustomCompoment: StoryObj<IHeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Heading with H1</h1>
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
