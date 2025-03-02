import { ErrorNotification } from '@/shared/ErrorNotification/ErrorNotification';
import { Button } from '../shared/Button/Button';
import { Input } from '@/shared/input/input';
import { Colors, Gaps } from '@/shared/tokens';
import { StyleSheet, View, Image } from 'react-native';
import { useState } from 'react';
import { CustomLink } from '@/shared/CustomLink/CustomLink';


export default function Login() {

  const [error, setError] = useState<string | undefined>();

  const alert = () => {
    setError('Неверный логин или пароль');
    setTimeout(() => {
      setError(undefined)
    }, 4000)
  }

  return (
    <View style={styles.container}>
      <ErrorNotification error={error}/>
      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}
          resizeMode='contain'
        />
        <View style={styles.form}>
          <Input placeholder='Email' />
          <Input isPassword placeholder='Пароль' />
          <Button text='Войти' onPress={alert}/>
        </View>
        <CustomLink href={'/restore'} text="Восстановить пароль" />
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
