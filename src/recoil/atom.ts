import { atom, AtomEffect, DefaultValue } from "recoil";
import { QrisMerchant, QrisTransaction } from "./types"
import AsyncStorage from '@react-native-async-storage/async-storage';

function persistAtom<T>(key: string): AtomEffect<T> {
    return ({ setSelf, onSet }) => {
        Promise.resolve()
            .then(() => AsyncStorage.getItem(key))
            .then(savedValue => {
                setSelf(
                    savedValue != null ? JSON.parse(savedValue) : new DefaultValue()
                );
            })
            .catch(error => console.error(`Error loading persisted atom "${key}":`, error));

        // Subscribe to state changes and persist them to storage
        onSet((newValue, _, isReset) => {
            isReset
                ? AsyncStorage.removeItem(key)
                : AsyncStorage.setItem(key, JSON.stringify(newValue));
        });
    };
}

const tipeQRISStaticText = {
    title: 'Pilih Tipe QRIS',
    buttons:
        [
            { buttonText: 'Dynamic' },
            { buttonText: 'Static' },
        ]
}

const jenisTipStaticText = {
    title: 'Jenis TIP / Biaya Layanan',
    buttons:
        [
            { buttonText: 'Dynamic' },
            { buttonText: 'Static' },
            { buttonText: 'Percentage' }
        ]
}

const initialQrisTransaction: QrisTransaction = {
    id: 'test',
    qrCode: '00020101021126660014ID.LINKAJA.WWW011893600911002164800102152009170916480010303UME51450015ID.OR.GPNQR.WWW02150000000000000000303UME520454995802ID5903KAI6009Indonesia61051532562210117ESP1663719323KBQH53033606304',
    merchantName: 'Fake QRIS MERCHANT',
    qrisType: 'Dynamic',
    jenisTip: 'Dynamic',
    price: 0,
    tip: 0
}

const FakeQrisMerchants: QrisMerchant = {
    id: 'test',
    qrisType: 'static',
    jenisTip: 'static',
    acquirerName: 'Link Aja',
    bussinessType: 'UMI',
    merchantCity: 'Bandung',
    merchantName: 'Fake QRIS Merchant',
    is_tip_activated: '550202',
    qrCode: '00020101021126660014ID.LINKAJA.WWW011893600911002164800102152009170916480010303UME51450015ID.OR.GPNQR.WWW02150000000000000000303UME520454995802ID5903KAI6009Indonesia61051532562210117ESP1663719323KBQH53033606304',
}

export const tipeQrisStaticState = atom({
    key: 'tipeQrisStaticState',
    default: tipeQRISStaticText
})

export const jenisTipStaticState = atom({
    key: 'jenisTipStaticState',
    default: jenisTipStaticText
})

export const qrisTransactionState = atom({
    key: 'qrisTransactionState',
    default: initialQrisTransaction,
    effects_UNSTABLE: [persistAtom('qrisTransactionKey')]
})

export const savedQrisState = atom<QrisMerchant[]>({
    key: 'savedQrisState',
    default: [FakeQrisMerchants],
    effects_UNSTABLE: [persistAtom('savedQrisKey')]
})