import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button
} from 'react-native'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import BouncyCheckBox from 'react-native-bouncy-checkbox'
import ButtonWithText from './src/components/ButtonWithText'
import { jenisTipStaticState, qrisTransactionState, tipeQrisStaticState } from './src/recoil/atom'
import Input from './src/components/Input'
import { useState } from 'react'
import { changeMerchantName, changePriceQris, changeTipeQris, changeTipQris, changeTipTipeQris } from './src/recoil/selector'
import { makeTransaction } from './src/functions/fetching'

const App = (): JSX.Element => {
  const tipeQrisStatic = useRecoilValue(tipeQrisStaticState)
  const jenisTipStatic = useRecoilValue(jenisTipStaticState)
  const data = useRecoilValue(qrisTransactionState)
  const [activeButtonTipe, setTipeQris] = useRecoilState(changeTipeQris)
  const [activeButtonTip, setTipTipeQris] = useRecoilState(changeTipTipeQris)
  const [isChangeMerchantName, setStatusMerchantName] = useState<boolean>(false)
  const setMerchantName = useSetRecoilState(changeMerchantName)
  const setPrice = useSetRecoilState(changePriceQris)
  const setTip = useSetRecoilState(changeTipQris)

  const changeCheckBoxStatus = ():void => {
    setMerchantName('')
    setStatusMerchantName(!isChangeMerchantName)
  }

  return (
    <View style={{ backgroundColor: '#87ceeb', flex: 1 }}>
      <View style={styles.containerTitle}>
        <Text style={styles.textTitle}>Thiee Kitchen Bandung</Text>
      </View>
      <View style={styles.containerMain}>
        <BouncyCheckBox
          isChecked={isChangeMerchantName}
          onPress={changeCheckBoxStatus}
          text='Ganti Nama Merchant'
          fillColor='green'
          textStyle={{ textDecorationLine: 'none', color: 'black' }}
          disableBuiltInState />
        <View style={styles.containerSecond}>
          <ButtonWithText
            title={tipeQrisStatic.title}
            buttons={tipeQrisStatic.buttons}
            changeState={setTipeQris}
            activeButton={activeButtonTipe} />
          <ButtonWithText
            title={jenisTipStatic.title}
            buttons={jenisTipStatic.buttons}
            changeState={setTipTipeQris}
            activeButton={activeButtonTip} />
          {isChangeMerchantName &&
            <Input label={'Masukan Nama Merchant'} type={'default'} setter={setMerchantName} value={data.merchantName} />
          }
          <View style={{ marginTop: 20 }}>
            {activeButtonTipe === 'Static' &&
              <Input label={'Masukan Harga'} type={'number-pad'} setter={setPrice} value={String(data.price)} />
            }
            {activeButtonTip === 'Dynamic' ||
              <Input label={`Masukan Jumlah ${activeButtonTip === 'Percentage' ? 'Persentase ' : ''}Tip`} type={'number-pad'} setter={setTip} value={String(data.tip)} />
            }
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Button title={`Generate ${activeButtonTipe} QRIS`} onPress={() => makeTransaction(data)} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerTitle: {
    marginTop: 5,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'red'
  },
  containerMain: {
    marginTop: 10,
    marginHorizontal: 10,
    flex: 1,
  },
  containerSecond: {
    marginVertical: 5,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textInput: {
    borderWidth: 1,
    paddingVertical: 5,
    borderRadius: 5,
  },
  labelTextInput: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2
  }
})

export default App