import React from 'react';
import {Text, View} from 'react-native';

type DemoProps = {
  title: string;
};

export const Demo = React.memo((props: DemoProps) => {
  return (
    <View>
      <Text style={{fontSize: 40, fontWeight: 'bold'}}>{props.title}</Text>
    </View>
  );
});
