import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListDrug from './src/ListDrug'
import CartButton from './src/CartButton'
import DrugDetail from './src/DrugDetail'
import Cart from './src/Cart';

const Stack = createNativeStackNavigator();
const App = () =>
{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='ListDrug' component={ListDrug}
          options={{
            title: 'Danh sách sản phẩm',
            headerStyle: {
              backgroundColor: '#306EFF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <CartButton />
            ),
          }}
        />
        <Stack.Screen name='DrugDetail' component={DrugDetail}
          options={{
            title: 'Chi tiết thuốc',
            headerStyle: {
              backgroundColor: '#306EFF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <CartButton />
            ),
          }} />
        <Stack.Screen name='Cart' component={Cart}
          options={{
            title: 'Giỏ hàng',
            headerStyle: {
              backgroundColor: '#306EFF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;