import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'

export const SearchInput = styled.input`
  /* width: 100%; */
  height: 40px;
  border-radius: 10px;
  padding-left: 2%;
  border: none;
  width: 350px;
  background-color: #fff;
`

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const SearchButton = styled(SearchIcon).attrs(props => ({
  fontSize: 'large',
}))`
  right: 0;
  position: absolute;
  border-left: 1px solid #c5c3c6;
  color: #46494c;
  :hover {
    cursor: pointer;
  }
`
