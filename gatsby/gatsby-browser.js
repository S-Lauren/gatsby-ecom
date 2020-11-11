import React from 'react';
import MyLayout from './src/components/mylayout';

export function wrapPageElement({element, props}) {
  return (
    <>
     <MyLayout {...props}> {element} </MyLayout>
    </>
  );
};

