import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const ListDrug = ({ navigation }) =>
{
    const items = [
        {
            image: { uri: 'https://nhathuoclongchau.com/upload/post/41071/images/thuoc-tri-cam-cum-decolgen-ban-nen-biet%20(1)(1).jpg' },
            name: 'Thuốc cảm1',
            newPrice: '100.000',
            discount: '5%',
            oldPrice: '105.000'
        }, {
            image: { uri: 'https://nhathuoclongchau.com/upload/post/41071/images/thuoc-tri-cam-cum-decolgen-ban-nen-biet%20(1)(1).jpg' },
            name: 'Thuốc cảm1',
            newPrice: '100.000',
            discount: '5%',
            oldPrice: '105.000'
        }, {
            image: { uri: 'https://nhathuoclongchau.com/upload/post/41071/images/thuoc-tri-cam-cum-decolgen-ban-nen-biet%20(1)(1).jpg' },
            name: 'Thuốc cảm1',
            newPrice: '100.000',
            discount: '5%',
            oldPrice: '105.000'
        }, {
            image: { uri: 'https://nhathuoclongchau.com/upload/post/41071/images/thuoc-tri-cam-cum-decolgen-ban-nen-biet%20(1)(1).jpg' },
            name: 'Thuốc cảm1',
            newPrice: '100.000',
            discount: '5%',
            oldPrice: '105.000'
        }, {
            image: { uri: 'https://nhathuoclongchau.com/upload/post/41071/images/thuoc-tri-cam-cum-decolgen-ban-nen-biet%20(1)(1).jpg' },
            name: 'Thuốc cảm1',
            newPrice: '100.000',
            discount: '5%',
            oldPrice: '105.000'
        }, {
            image: { uri: 'https://nhathuoclongchau.com/upload/post/41071/images/thuoc-tri-cam-cum-decolgen-ban-nen-biet%20(1)(1).jpg' },
            name: 'Thuốc cảm1',
            newPrice: '100.000',
            discount: '5%',
            oldPrice: '105.000'
        },
        {
            image: { uri: 'https://nhathuoclongchau.com/upload/post/41071/images/thuoc-tri-cam-cum-decolgen-ban-nen-biet%20(1)(1).jpg' },
            name: 'Thuốc cảm2',
            newPrice: '100.000',
            discount: '5%',
            oldPrice: '105.000'
        },
        {
            image: { uri: 'https://nhathuoclongchau.com/upload/post/41071/images/thuoc-tri-cam-cum-decolgen-ban-nen-biet%20(1)(1).jpg' },
            name: 'Thuốc cảm3',
            newPrice: '100.000',
            discount: '5%',
            oldPrice: '105.000'
        },
        {
            image: { uri: 'https://nhathuoclongchau.com/upload/post/41071/images/thuoc-tri-cam-cum-decolgen-ban-nen-biet%20(1)(1).jpg' },
            name: 'Thuốc cảm4',
            newPrice: '100.000',
            discount: '5%',
            oldPrice: '105.000'
        },
        {
            image: { uri: 'https://nhathuoclongchau.com/upload/post/41071/images/thuoc-tri-cam-cum-decolgen-ban-nen-biet%20(1)(1).jpg' },
            name: 'Thuốc cảm5',
            newPrice: '100.000',
            discount: '5%',
            oldPrice: '105.000'
        },
    ]
    return (
        <View style={{ flex: 1, alignItems: 'center', paddingVertical: 20 }}>
            {/* <View style={{ paddingBottom: 20 }}>
                <SearchBar />
            </View> */}

            <FlatList
                data={items}
                numColumns={2}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { navigation.navigate("DrugDetail"), { drug: item } }}>
                        <View style={{ marginHorizontal: 20, marginBottom: 20, alignItems: 'center', borderWidth: 1, borderColor: '#3BB9FF', borderRadius: 10, padding: 10 }}>
                            <Image
                                source={item.image}
                                style={{ height: 100, width: 100, resizeMode: 'center' }}
                            />
                            <Text style={{ color: 'black', fontSize: 15, marginVertical: 5 }}>{item.name}</Text>
                            <Text style={{ color: 'black' }}>{item.newPrice} ₫</Text>
                            <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                                <Text style={{ color: 'black', textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>{item.oldPrice} ₫</Text>
                                <Text style={{ color: 'red', marginLeft: 10 }}>{item.discount} off</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default ListDrug