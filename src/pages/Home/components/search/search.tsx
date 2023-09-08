import * as S from './search'
import { BsSearch } from "react-icons/bs";

export const Search = () => {
  return(
    <S.SearchContainer>
      <S.search>
        <div className="input">
        <BsSearch/>
        <p>Search your favorite food...</p>
        </div>
      </S.search>
    </S.SearchContainer>
  )
}