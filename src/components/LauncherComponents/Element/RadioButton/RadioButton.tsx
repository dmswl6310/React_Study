import { Dispatch, SetStateAction, ChangeEvent } from 'react';
import styled from 'styled-components';

export default function RadioButton(props: {
  label: string;
  id: string;
  name: string;
  display?: string;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  value: string;
}) {
  return (
    <Label htmlFor={props.id} style={{ display: props.display }}>
      <input
        type="radio"
        id={props.id}
        name={props.name}
        value={props.value}
        checked={props.value === props.state}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          props.setState(e.target.value)
        }
      />
      <span className="label">{props.label}</span>
    </Label>
  );
}

const Label = styled.label`
  margin: 10px 10px 10px 0;
  font-size: 14px;
  user-select: none;
  cursor: pointer;
  input[type='radio'] {
    vertical-align: middle;
    margin-right: 7px;
    border: 2px solid white;
    box-shadow: 0 0 0 1px #43599a;
    appearance: none;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background-color: #fff;
    transition: all ease-in 0.2s;
  }
  input[type='radio']:checked {
    background-color: #43599a;
    transition: all ease-in 0.2s;
  }
`;
