import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    color: {
      success: string;
      info: string;
      warning: string;

      card_success: string;
      card_info: string;
      card_warning: string;

      primary: string;
      secondary: string;
      terciary: string;

      white: string;
      black: string;
      gray: string;

      text: string;

      focus: string;

      card: string;
    };

    image: {
      select: string;
      wallet: string;
    };
  }
}
