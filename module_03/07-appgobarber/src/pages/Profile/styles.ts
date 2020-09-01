import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  /* height: 1120px; */
  /* align-items: center; */
  justify-content: center;
  padding: 200px 30px ${Platform.OS === 'android' ? 200 : 40}px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 12px 0;
  text-align: left;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 14px;
  top: 64px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 0px;
`;

export const UserAvatar = styled.Image`
  width: 166px;
  height: 166px;
  border-radius: 83px;
  margin-top: 10px;
  align-self: center;
`;
