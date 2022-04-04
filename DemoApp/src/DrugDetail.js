import { SafeAreaView, Modal, StyleSheet, View, ScrollView, Text, Image, Dimensions, TouchableOpacity, TextInput, Keyboard } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const DrugDetail = () =>
{
    const [count, setCount] = React.useState("")
    const [modalVisible, setModalVisible] = React.useState(false)
    const drug = {
        imageSource: { uri: 'https://nhathuoclongchau.com/upload/post/41071/images/thuoc-tri-cam-cum-decolgen-ban-nen-biet%20(1)(1).jpg' },
        name: 'Thuốc cảm cúm',
        newPrice: '75.000',
        discount: '25%',
        oldPrice: '100.000',
        description: {
            thanhphanchinh: 'Paracetamol',
            thanhphan: 'Paracetamol: 500mg, Phenylephrine hydrochloride: 10mg, Chlorpheniramine maleate: 2mg',
            congdung: 'Giúp co mạch cuốn mũi đang bị sưng nề, giảm phù nề, xung huyết mô, xung huyết mũi và làm tăng thông khí qua mũi, giảm nghẹt mũi đặc biệt ở các vùng mà thuốc xịt, thuốc nhỏ giọt hoặc các dạng thuốc tác dụng tại chỗ không thể vào đến được.',
            huongdansudung: 'Ngày uống 3 viên sáng, trưa, tối',
            baoquan: 'Bảo quản nơi khô ráo, thoáng mát, khoảng 25-28 độ C',
            thuonghieu: 'Nhà thuốc A'
        },
    }
    let screenWith = Dimensions.get('window').width;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        //source={drug.imageSource}
                        source={drug.imageSource}
                        style={{
                            width: screenWith, height: 200, marginBottom: 25,
                        }}
                    />
                </View>
                <Text style={styles.heading}>
                    {drug.name}
                </Text>
                <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: 'bold', }}>
                    ({drug.description.thanhphanchinh})
                </Text>
                <View style={styles.priceBox}>
                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>Giá: </Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>{drug.newPrice} đ</Text>
                    <Text style={{ color: 'black', marginLeft: 25, textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>{drug.oldPrice} đ</Text>
                    <Text style={{ color: 'black', marginLeft: 25, color: 'red' }}>{drug.discount}</Text>
                </View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Mô tả</Text>
                <ScrollView style={{ height: 200 }}>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginLeft: 25 }}>Thành phần:</Text>
                    <Text style={{ fontSize: 18, color: 'black', marginLeft: 25 }}>{drug.description.thanhphan}</Text>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginLeft: 25 }}>Công dụng:</Text>
                    <Text style={{ fontSize: 18, color: 'black', marginLeft: 25 }}>{drug.description.congdung}</Text>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginLeft: 25 }}>Hướng dẫn sử dụng:</Text>
                    <Text style={{ fontSize: 18, color: 'black', marginLeft: 25 }}>{drug.description.huongdansudung}</Text>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginLeft: 25 }}>Bảo quản:</Text>
                    <Text style={{ fontSize: 18, color: 'black', marginLeft: 25 }}>{drug.description.baoquan}</Text>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginLeft: 25 }}>Thương hiệu:</Text>
                    <Text style={{ fontSize: 18, color: 'black', marginLeft: 25 }}>{drug.description.thuonghieu}</Text>
                </ScrollView>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() =>
                    {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginBottom: 20 }}>
                                <Text style={styles.modalText}>Nhập số lượng</Text>
                                <TextInput onChangeText={setCount} value={count.toString()} style={{ borderBottomColor: 'black', borderBottomWidth: 2, marginLeft: 30, fontSize: 18, justifyContent: 'center' }} />
                            </View>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Xác nhận</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity
                    style={styles.button1}
                    onPress={() => setModalVisible(true)}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name='cart-plus' style={{ color: 'white', fontSize: 16 }} />
                        <Text style={{ marginLeft: 10, fontSize: 18, color: 'white', fontWeight: 'bold' }}>Thêm vào giỏ hàng</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default DrugDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-start',
    },
    heading: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black'
    },
    priceBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 10,
    },
    button1: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B65EC',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        width: '100%'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '90%'
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        backgroundColor: '#2B65EC',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: 'black',
        fontSize: 16,
        paddingTop: 20
    }
});