import styled from '@emotion/styled';

export const SearchbarConatiner = styled.header({
  top: 0,
  left: 0,
  position: 'sticky',
  zIndex: 1100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '64px',
  paddingRight: '24px',
  paddingLeft: '24px',
  paddingTop: '12px',
  paddingBottom: '12px',
  color: '#fff',
  backgroundColor: '#3f51b5',
  boxShadow: `0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)`,
});

export const SearchForm = styled.form({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: '600px',
  backgroundColor: '#fff',
  borderRadius: '3px',
  overflow: 'hidden',
});

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const SearchFormButtonLAbel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
