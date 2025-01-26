import { Button } from '../shared/Button/Button';
import { Input } from '@/shared/input/input';
import { Colors, Gaps } from '@/shared/tokens';
import { StyleSheet, View, Text, Image } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}
          resizeMode='contain'
        />
        <View style={styles.form}>
          <Input placeholder='Email' />
          <Input isPassword placeholder='Пароль' />
          <Button text='Войти'/>
        </View>
        <Text>Восстановить пароль</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 55,
    backgroundColor: Colors.black
  },
  content: {
    alignItems: 'center',
    gap: Gaps.g50,
  },
  form: {
    alignSelf: 'stretch',
    gap: Gaps.g16,
  },
  logo: {
    width: 220
  }
});
