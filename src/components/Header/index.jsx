import * as S from "./styles";
import { ToggleThemeButton } from "..";

export const Header = ({ setDark, isDark }) => {
  return (
    <S.Header>
      <h1>TODO</h1>
      <ToggleThemeButton setDark={setDark} isDark={isDark} />
    </S.Header>
  );
};
