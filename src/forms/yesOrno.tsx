import React from 'react';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

const yesOrno: React.FC = () => <Checkbox onChange={onChange} style={{fontSize:12,marginTop:-30}}>disqualify candidate if the answer is no</Checkbox>;

export default yesOrno;