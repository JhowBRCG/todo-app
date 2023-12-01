import * as S from "./styles";

export const FilterButtons = ({ setFilter, currentFilter }) => {
  return (
    <>
      <S.FilterButton
        onClick={() => setFilter("all")}
        className={currentFilter === "all" ? "active" : ""}
      >
        All
      </S.FilterButton>

      <S.FilterButton
        onClick={() => setFilter("uncompleted")}
        className={currentFilter === "uncompleted" ? "active" : ""}
      >
        Active
      </S.FilterButton>

      <S.FilterButton
        onClick={() => setFilter("completed")}
        className={currentFilter === "completed" ? "active" : ""}
      >
        Completed
      </S.FilterButton>
    </>
  );
};
