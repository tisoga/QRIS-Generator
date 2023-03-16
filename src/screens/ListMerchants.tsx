import { NativeStackScreenProps } from '@react-navigation/native-stack'
import {
    View,
    FlatList,
    Button
} from 'react-native'
import { MerchantBox, TitleText } from '../components'
import { MerchantParamList } from '../navigation/Merchant'

type Props = NativeStackScreenProps<MerchantParamList, 'listMerchant'>

const ListMerchants = ({ navigation }: Props): JSX.Element => {
    const data = [1, 2, 3]

    const goToDetailMerchant = (index: number) => {
        console.log(index)
        navigation.navigate('merchantDetail')
    }

    return (
        <View style={{ backgroundColor: '#87ceeb', flex: 1, gap: 10 }}>
            <TitleText title='List Merchants' />
            <FlatList
                data={data}
                contentContainerStyle={{ gap: 5 }}
                renderItem={({ item, index }) => (
                    <MerchantBox key={index} merchantName='Thiee Kitchen Super' acquirer='Link Aja' tipeBisnis='Usaha Bisnis'
                        onPress={goToDetailMerchant} />
                )} />
            <View>
                <Button title='Add New Merchant' />
            </View>
        </View>
    )
}

export default ListMerchants