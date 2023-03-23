import { DrawerScreenProps } from '@react-navigation/drawer';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import {
    View,
    FlatList,
    Button,
    Text,
    StyleSheet
} from 'react-native'
import { useRecoilValue } from 'recoil';
import { MerchantBox, TitleText } from '../components'
import { MerchantParamList } from '../navigation/Merchant'
import { RootParams } from '../navigation/RootNavigator';
import { savedQrisState } from '../recoil/atom';

type Props = CompositeScreenProps<
    NativeStackScreenProps<MerchantParamList, 'listMerchant'>,
    DrawerScreenProps<RootParams, 'TransactionDrawer'>
>;

const EmptyMerchantMessage = (): JSX.Element => {
    return (
        <View style={styles.noMerchantContainer}>
            <Text style={styles.textNoMerchant}>No Merchants Saved, Add Merchant First to use this App.</Text>
        </View>
    )
}

const ListMerchants = ({ navigation }: Props): JSX.Element => {
    const data = [1, 2, 3]
    const merchantsList = useRecoilValue(savedQrisState)

    const goToDetailMerchant = (indexMerchant: number) => {
        navigation.navigate('merchantDetail', {
            index: indexMerchant
        })
    }

    return (
        <View style={{ backgroundColor: '#87ceeb', flex: 1, gap: 10 }}>
            <TitleText title='List Merchants' onPress={() => navigation.toggleDrawer()} />
            <FlatList
                data={merchantsList}
                contentContainerStyle={{ gap: 5, flexGrow: 1 }}
                renderItem={({ item, index }) => (
                    <MerchantBox key={index} index={index} merchantName={item.merchantName} acquirer={item.acquirerName} tipeBisnis={item.bussinessType}
                        onPress={goToDetailMerchant} />
                )}
                ListEmptyComponent={EmptyMerchantMessage}
            />
            <View>
                <Button title='Add New Merchant' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    noMerchantContainer: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    textNoMerchant: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default ListMerchants