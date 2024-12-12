import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadGetterTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type StdAddress = {
    $$type: 'StdAddress';
    workchain: bigint;
    address: bigint;
}

export function storeStdAddress(src: StdAddress) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.workchain, 8);
        b_0.storeUint(src.address, 256);
    };
}

export function loadStdAddress(slice: Slice) {
    let sc_0 = slice;
    let _workchain = sc_0.loadIntBig(8);
    let _address = sc_0.loadUintBig(256);
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

function loadTupleStdAddress(source: TupleReader) {
    let _workchain = source.readBigNumber();
    let _address = source.readBigNumber();
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

function loadGetterTupleStdAddress(source: TupleReader) {
    let _workchain = source.readBigNumber();
    let _address = source.readBigNumber();
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

function storeTupleStdAddress(source: StdAddress) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.workchain);
    builder.writeNumber(source.address);
    return builder.build();
}

function dictValueParserStdAddress(): DictionaryValue<StdAddress> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStdAddress(src)).endCell());
        },
        parse: (src) => {
            return loadStdAddress(src.loadRef().beginParse());
        }
    }
}

export type VarAddress = {
    $$type: 'VarAddress';
    workchain: bigint;
    address: Slice;
}

export function storeVarAddress(src: VarAddress) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.workchain, 32);
        b_0.storeRef(src.address.asCell());
    };
}

export function loadVarAddress(slice: Slice) {
    let sc_0 = slice;
    let _workchain = sc_0.loadIntBig(32);
    let _address = sc_0.loadRef().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

function loadTupleVarAddress(source: TupleReader) {
    let _workchain = source.readBigNumber();
    let _address = source.readCell().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

function loadGetterTupleVarAddress(source: TupleReader) {
    let _workchain = source.readBigNumber();
    let _address = source.readCell().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

function storeTupleVarAddress(source: VarAddress) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.workchain);
    builder.writeSlice(source.address.asCell());
    return builder.build();
}

function dictValueParserVarAddress(): DictionaryValue<VarAddress> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeVarAddress(src)).endCell());
        },
        parse: (src) => {
            return loadVarAddress(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Slice;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw.asCell());
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadGetterTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw.asCell());
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadGetterTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadGetterTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadGetterTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadGetterTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type JettonMint = {
    $$type: 'JettonMint';
    origin: Address;
    receiver: Address;
    amount: bigint;
    custom_payload: Cell | null;
    forward_ton_amount: bigint;
    forward_payload: Slice;
}

export function storeJettonMint(src: JettonMint) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2310479113, 32);
        b_0.storeAddress(src.origin);
        b_0.storeAddress(src.receiver);
        b_0.storeInt(src.amount, 257);
        if (src.custom_payload !== null && src.custom_payload !== undefined) { b_0.storeBit(true).storeRef(src.custom_payload); } else { b_0.storeBit(false); }
        b_0.storeCoins(src.forward_ton_amount);
        b_0.storeBuilder(src.forward_payload.asBuilder());
    };
}

export function loadJettonMint(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2310479113) { throw Error('Invalid prefix'); }
    let _origin = sc_0.loadAddress();
    let _receiver = sc_0.loadAddress();
    let _amount = sc_0.loadIntBig(257);
    let _custom_payload = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _forward_ton_amount = sc_0.loadCoins();
    let _forward_payload = sc_0;
    return { $$type: 'JettonMint' as const, origin: _origin, receiver: _receiver, amount: _amount, custom_payload: _custom_payload, forward_ton_amount: _forward_ton_amount, forward_payload: _forward_payload };
}

function loadTupleJettonMint(source: TupleReader) {
    let _origin = source.readAddress();
    let _receiver = source.readAddress();
    let _amount = source.readBigNumber();
    let _custom_payload = source.readCellOpt();
    let _forward_ton_amount = source.readBigNumber();
    let _forward_payload = source.readCell().asSlice();
    return { $$type: 'JettonMint' as const, origin: _origin, receiver: _receiver, amount: _amount, custom_payload: _custom_payload, forward_ton_amount: _forward_ton_amount, forward_payload: _forward_payload };
}

function loadGetterTupleJettonMint(source: TupleReader) {
    let _origin = source.readAddress();
    let _receiver = source.readAddress();
    let _amount = source.readBigNumber();
    let _custom_payload = source.readCellOpt();
    let _forward_ton_amount = source.readBigNumber();
    let _forward_payload = source.readCell().asSlice();
    return { $$type: 'JettonMint' as const, origin: _origin, receiver: _receiver, amount: _amount, custom_payload: _custom_payload, forward_ton_amount: _forward_ton_amount, forward_payload: _forward_payload };
}

function storeTupleJettonMint(source: JettonMint) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.origin);
    builder.writeAddress(source.receiver);
    builder.writeNumber(source.amount);
    builder.writeCell(source.custom_payload);
    builder.writeNumber(source.forward_ton_amount);
    builder.writeSlice(source.forward_payload.asCell());
    return builder.build();
}

function dictValueParserJettonMint(): DictionaryValue<JettonMint> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeJettonMint(src)).endCell());
        },
        parse: (src) => {
            return loadJettonMint(src.loadRef().beginParse());
        }
    }
}

export type JettonData = {
    $$type: 'JettonData';
    total_supply: bigint;
    mintable: boolean;
    admin_address: Address;
    jetton_content: Cell;
    jetton_wallet_code: Cell;
}

export function storeJettonData(src: JettonData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.total_supply, 257);
        b_0.storeBit(src.mintable);
        b_0.storeAddress(src.admin_address);
        b_0.storeRef(src.jetton_content);
        b_0.storeRef(src.jetton_wallet_code);
    };
}

export function loadJettonData(slice: Slice) {
    let sc_0 = slice;
    let _total_supply = sc_0.loadIntBig(257);
    let _mintable = sc_0.loadBit();
    let _admin_address = sc_0.loadAddress();
    let _jetton_content = sc_0.loadRef();
    let _jetton_wallet_code = sc_0.loadRef();
    return { $$type: 'JettonData' as const, total_supply: _total_supply, mintable: _mintable, admin_address: _admin_address, jetton_content: _jetton_content, jetton_wallet_code: _jetton_wallet_code };
}

function loadTupleJettonData(source: TupleReader) {
    let _total_supply = source.readBigNumber();
    let _mintable = source.readBoolean();
    let _admin_address = source.readAddress();
    let _jetton_content = source.readCell();
    let _jetton_wallet_code = source.readCell();
    return { $$type: 'JettonData' as const, total_supply: _total_supply, mintable: _mintable, admin_address: _admin_address, jetton_content: _jetton_content, jetton_wallet_code: _jetton_wallet_code };
}

function loadGetterTupleJettonData(source: TupleReader) {
    let _total_supply = source.readBigNumber();
    let _mintable = source.readBoolean();
    let _admin_address = source.readAddress();
    let _jetton_content = source.readCell();
    let _jetton_wallet_code = source.readCell();
    return { $$type: 'JettonData' as const, total_supply: _total_supply, mintable: _mintable, admin_address: _admin_address, jetton_content: _jetton_content, jetton_wallet_code: _jetton_wallet_code };
}

function storeTupleJettonData(source: JettonData) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.total_supply);
    builder.writeBoolean(source.mintable);
    builder.writeAddress(source.admin_address);
    builder.writeCell(source.jetton_content);
    builder.writeCell(source.jetton_wallet_code);
    return builder.build();
}

function dictValueParserJettonData(): DictionaryValue<JettonData> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeJettonData(src)).endCell());
        },
        parse: (src) => {
            return loadJettonData(src.loadRef().beginParse());
        }
    }
}

export type JettonTransfer = {
    $$type: 'JettonTransfer';
    query_id: bigint;
    amount: bigint;
    destination: Address;
    response_destination: Address;
    custom_payload: Cell | null;
    forward_ton_amount: bigint;
    forward_payload: Slice;
}

export function storeJettonTransfer(src: JettonTransfer) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(260734629, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.destination);
        b_0.storeAddress(src.response_destination);
        if (src.custom_payload !== null && src.custom_payload !== undefined) { b_0.storeBit(true).storeRef(src.custom_payload); } else { b_0.storeBit(false); }
        b_0.storeCoins(src.forward_ton_amount);
        b_0.storeBuilder(src.forward_payload.asBuilder());
    };
}

export function loadJettonTransfer(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 260734629) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    let _amount = sc_0.loadCoins();
    let _destination = sc_0.loadAddress();
    let _response_destination = sc_0.loadAddress();
    let _custom_payload = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _forward_ton_amount = sc_0.loadCoins();
    let _forward_payload = sc_0;
    return { $$type: 'JettonTransfer' as const, query_id: _query_id, amount: _amount, destination: _destination, response_destination: _response_destination, custom_payload: _custom_payload, forward_ton_amount: _forward_ton_amount, forward_payload: _forward_payload };
}

function loadTupleJettonTransfer(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _destination = source.readAddress();
    let _response_destination = source.readAddress();
    let _custom_payload = source.readCellOpt();
    let _forward_ton_amount = source.readBigNumber();
    let _forward_payload = source.readCell().asSlice();
    return { $$type: 'JettonTransfer' as const, query_id: _query_id, amount: _amount, destination: _destination, response_destination: _response_destination, custom_payload: _custom_payload, forward_ton_amount: _forward_ton_amount, forward_payload: _forward_payload };
}

function loadGetterTupleJettonTransfer(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _destination = source.readAddress();
    let _response_destination = source.readAddress();
    let _custom_payload = source.readCellOpt();
    let _forward_ton_amount = source.readBigNumber();
    let _forward_payload = source.readCell().asSlice();
    return { $$type: 'JettonTransfer' as const, query_id: _query_id, amount: _amount, destination: _destination, response_destination: _response_destination, custom_payload: _custom_payload, forward_ton_amount: _forward_ton_amount, forward_payload: _forward_payload };
}

function storeTupleJettonTransfer(source: JettonTransfer) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.destination);
    builder.writeAddress(source.response_destination);
    builder.writeCell(source.custom_payload);
    builder.writeNumber(source.forward_ton_amount);
    builder.writeSlice(source.forward_payload.asCell());
    return builder.build();
}

function dictValueParserJettonTransfer(): DictionaryValue<JettonTransfer> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeJettonTransfer(src)).endCell());
        },
        parse: (src) => {
            return loadJettonTransfer(src.loadRef().beginParse());
        }
    }
}

export type JettonTransferNotification = {
    $$type: 'JettonTransferNotification';
    query_id: bigint;
    amount: bigint;
    sender: Address;
    forward_payload: Slice;
}

export function storeJettonTransferNotification(src: JettonTransferNotification) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1935855772, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.sender);
        b_0.storeBuilder(src.forward_payload.asBuilder());
    };
}

export function loadJettonTransferNotification(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1935855772) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    let _amount = sc_0.loadCoins();
    let _sender = sc_0.loadAddress();
    let _forward_payload = sc_0;
    return { $$type: 'JettonTransferNotification' as const, query_id: _query_id, amount: _amount, sender: _sender, forward_payload: _forward_payload };
}

function loadTupleJettonTransferNotification(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _sender = source.readAddress();
    let _forward_payload = source.readCell().asSlice();
    return { $$type: 'JettonTransferNotification' as const, query_id: _query_id, amount: _amount, sender: _sender, forward_payload: _forward_payload };
}

function loadGetterTupleJettonTransferNotification(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _sender = source.readAddress();
    let _forward_payload = source.readCell().asSlice();
    return { $$type: 'JettonTransferNotification' as const, query_id: _query_id, amount: _amount, sender: _sender, forward_payload: _forward_payload };
}

function storeTupleJettonTransferNotification(source: JettonTransferNotification) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.sender);
    builder.writeSlice(source.forward_payload.asCell());
    return builder.build();
}

function dictValueParserJettonTransferNotification(): DictionaryValue<JettonTransferNotification> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeJettonTransferNotification(src)).endCell());
        },
        parse: (src) => {
            return loadJettonTransferNotification(src.loadRef().beginParse());
        }
    }
}

export type JettonBurn = {
    $$type: 'JettonBurn';
    query_id: bigint;
    amount: bigint;
    response_destination: Address;
    custom_payload: Cell | null;
}

export function storeJettonBurn(src: JettonBurn) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1499400124, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.response_destination);
        if (src.custom_payload !== null && src.custom_payload !== undefined) { b_0.storeBit(true).storeRef(src.custom_payload); } else { b_0.storeBit(false); }
    };
}

export function loadJettonBurn(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1499400124) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    let _amount = sc_0.loadCoins();
    let _response_destination = sc_0.loadAddress();
    let _custom_payload = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'JettonBurn' as const, query_id: _query_id, amount: _amount, response_destination: _response_destination, custom_payload: _custom_payload };
}

function loadTupleJettonBurn(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _response_destination = source.readAddress();
    let _custom_payload = source.readCellOpt();
    return { $$type: 'JettonBurn' as const, query_id: _query_id, amount: _amount, response_destination: _response_destination, custom_payload: _custom_payload };
}

function loadGetterTupleJettonBurn(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _response_destination = source.readAddress();
    let _custom_payload = source.readCellOpt();
    return { $$type: 'JettonBurn' as const, query_id: _query_id, amount: _amount, response_destination: _response_destination, custom_payload: _custom_payload };
}

function storeTupleJettonBurn(source: JettonBurn) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.response_destination);
    builder.writeCell(source.custom_payload);
    return builder.build();
}

function dictValueParserJettonBurn(): DictionaryValue<JettonBurn> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeJettonBurn(src)).endCell());
        },
        parse: (src) => {
            return loadJettonBurn(src.loadRef().beginParse());
        }
    }
}

export type JettonExcesses = {
    $$type: 'JettonExcesses';
    query_id: bigint;
}

export function storeJettonExcesses(src: JettonExcesses) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3576854235, 32);
        b_0.storeUint(src.query_id, 64);
    };
}

export function loadJettonExcesses(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3576854235) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    return { $$type: 'JettonExcesses' as const, query_id: _query_id };
}

function loadTupleJettonExcesses(source: TupleReader) {
    let _query_id = source.readBigNumber();
    return { $$type: 'JettonExcesses' as const, query_id: _query_id };
}

function loadGetterTupleJettonExcesses(source: TupleReader) {
    let _query_id = source.readBigNumber();
    return { $$type: 'JettonExcesses' as const, query_id: _query_id };
}

function storeTupleJettonExcesses(source: JettonExcesses) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    return builder.build();
}

function dictValueParserJettonExcesses(): DictionaryValue<JettonExcesses> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeJettonExcesses(src)).endCell());
        },
        parse: (src) => {
            return loadJettonExcesses(src.loadRef().beginParse());
        }
    }
}

export type JettonInternalTransfer = {
    $$type: 'JettonInternalTransfer';
    query_id: bigint;
    amount: bigint;
    from: Address;
    response_address: Address | null;
    forward_ton_amount: bigint;
    forward_payload: Slice;
}

export function storeJettonInternalTransfer(src: JettonInternalTransfer) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(395134233, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.from);
        b_0.storeAddress(src.response_address);
        b_0.storeCoins(src.forward_ton_amount);
        b_0.storeBuilder(src.forward_payload.asBuilder());
    };
}

export function loadJettonInternalTransfer(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 395134233) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    let _amount = sc_0.loadCoins();
    let _from = sc_0.loadAddress();
    let _response_address = sc_0.loadMaybeAddress();
    let _forward_ton_amount = sc_0.loadCoins();
    let _forward_payload = sc_0;
    return { $$type: 'JettonInternalTransfer' as const, query_id: _query_id, amount: _amount, from: _from, response_address: _response_address, forward_ton_amount: _forward_ton_amount, forward_payload: _forward_payload };
}

function loadTupleJettonInternalTransfer(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _from = source.readAddress();
    let _response_address = source.readAddressOpt();
    let _forward_ton_amount = source.readBigNumber();
    let _forward_payload = source.readCell().asSlice();
    return { $$type: 'JettonInternalTransfer' as const, query_id: _query_id, amount: _amount, from: _from, response_address: _response_address, forward_ton_amount: _forward_ton_amount, forward_payload: _forward_payload };
}

function loadGetterTupleJettonInternalTransfer(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _from = source.readAddress();
    let _response_address = source.readAddressOpt();
    let _forward_ton_amount = source.readBigNumber();
    let _forward_payload = source.readCell().asSlice();
    return { $$type: 'JettonInternalTransfer' as const, query_id: _query_id, amount: _amount, from: _from, response_address: _response_address, forward_ton_amount: _forward_ton_amount, forward_payload: _forward_payload };
}

function storeTupleJettonInternalTransfer(source: JettonInternalTransfer) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.from);
    builder.writeAddress(source.response_address);
    builder.writeNumber(source.forward_ton_amount);
    builder.writeSlice(source.forward_payload.asCell());
    return builder.build();
}

function dictValueParserJettonInternalTransfer(): DictionaryValue<JettonInternalTransfer> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeJettonInternalTransfer(src)).endCell());
        },
        parse: (src) => {
            return loadJettonInternalTransfer(src.loadRef().beginParse());
        }
    }
}

export type JettonBurnNotification = {
    $$type: 'JettonBurnNotification';
    query_id: bigint;
    amount: bigint;
    sender: Address;
    response_destination: Address;
}

export function storeJettonBurnNotification(src: JettonBurnNotification) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2078119902, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.sender);
        b_0.storeAddress(src.response_destination);
    };
}

export function loadJettonBurnNotification(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2078119902) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    let _amount = sc_0.loadCoins();
    let _sender = sc_0.loadAddress();
    let _response_destination = sc_0.loadAddress();
    return { $$type: 'JettonBurnNotification' as const, query_id: _query_id, amount: _amount, sender: _sender, response_destination: _response_destination };
}

function loadTupleJettonBurnNotification(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _sender = source.readAddress();
    let _response_destination = source.readAddress();
    return { $$type: 'JettonBurnNotification' as const, query_id: _query_id, amount: _amount, sender: _sender, response_destination: _response_destination };
}

function loadGetterTupleJettonBurnNotification(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _sender = source.readAddress();
    let _response_destination = source.readAddress();
    return { $$type: 'JettonBurnNotification' as const, query_id: _query_id, amount: _amount, sender: _sender, response_destination: _response_destination };
}

function storeTupleJettonBurnNotification(source: JettonBurnNotification) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.sender);
    builder.writeAddress(source.response_destination);
    return builder.build();
}

function dictValueParserJettonBurnNotification(): DictionaryValue<JettonBurnNotification> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeJettonBurnNotification(src)).endCell());
        },
        parse: (src) => {
            return loadJettonBurnNotification(src.loadRef().beginParse());
        }
    }
}

export type WalletData = {
    $$type: 'WalletData';
    balance: bigint;
    owner: Address;
    jetton: Address;
    jetton_wallet_code: Cell;
}

export function storeWalletData(src: WalletData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeCoins(src.balance);
        b_0.storeAddress(src.owner);
        b_0.storeAddress(src.jetton);
        b_0.storeRef(src.jetton_wallet_code);
    };
}

export function loadWalletData(slice: Slice) {
    let sc_0 = slice;
    let _balance = sc_0.loadCoins();
    let _owner = sc_0.loadAddress();
    let _jetton = sc_0.loadAddress();
    let _jetton_wallet_code = sc_0.loadRef();
    return { $$type: 'WalletData' as const, balance: _balance, owner: _owner, jetton: _jetton, jetton_wallet_code: _jetton_wallet_code };
}

function loadTupleWalletData(source: TupleReader) {
    let _balance = source.readBigNumber();
    let _owner = source.readAddress();
    let _jetton = source.readAddress();
    let _jetton_wallet_code = source.readCell();
    return { $$type: 'WalletData' as const, balance: _balance, owner: _owner, jetton: _jetton, jetton_wallet_code: _jetton_wallet_code };
}

function loadGetterTupleWalletData(source: TupleReader) {
    let _balance = source.readBigNumber();
    let _owner = source.readAddress();
    let _jetton = source.readAddress();
    let _jetton_wallet_code = source.readCell();
    return { $$type: 'WalletData' as const, balance: _balance, owner: _owner, jetton: _jetton, jetton_wallet_code: _jetton_wallet_code };
}

function storeTupleWalletData(source: WalletData) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.balance);
    builder.writeAddress(source.owner);
    builder.writeAddress(source.jetton);
    builder.writeCell(source.jetton_wallet_code);
    return builder.build();
}

function dictValueParserWalletData(): DictionaryValue<WalletData> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeWalletData(src)).endCell());
        },
        parse: (src) => {
            return loadWalletData(src.loadRef().beginParse());
        }
    }
}

export type RegisterToken = {
    $$type: 'RegisterToken';
    tokenAddress: Address;
}

export function storeRegisterToken(src: RegisterToken) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(394751612, 32);
        b_0.storeAddress(src.tokenAddress);
    };
}

export function loadRegisterToken(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 394751612) { throw Error('Invalid prefix'); }
    let _tokenAddress = sc_0.loadAddress();
    return { $$type: 'RegisterToken' as const, tokenAddress: _tokenAddress };
}

function loadTupleRegisterToken(source: TupleReader) {
    let _tokenAddress = source.readAddress();
    return { $$type: 'RegisterToken' as const, tokenAddress: _tokenAddress };
}

function loadGetterTupleRegisterToken(source: TupleReader) {
    let _tokenAddress = source.readAddress();
    return { $$type: 'RegisterToken' as const, tokenAddress: _tokenAddress };
}

function storeTupleRegisterToken(source: RegisterToken) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.tokenAddress);
    return builder.build();
}

function dictValueParserRegisterToken(): DictionaryValue<RegisterToken> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeRegisterToken(src)).endCell());
        },
        parse: (src) => {
            return loadRegisterToken(src.loadRef().beginParse());
        }
    }
}

export type VerifyJetton = {
    $$type: 'VerifyJetton';
    queryId: bigint;
    tokenAddress: Address;
}

export function storeVerifyJetton(src: VerifyJetton) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1099595772, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.tokenAddress);
    };
}

export function loadVerifyJetton(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1099595772) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _tokenAddress = sc_0.loadAddress();
    return { $$type: 'VerifyJetton' as const, queryId: _queryId, tokenAddress: _tokenAddress };
}

function loadTupleVerifyJetton(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _tokenAddress = source.readAddress();
    return { $$type: 'VerifyJetton' as const, queryId: _queryId, tokenAddress: _tokenAddress };
}

function loadGetterTupleVerifyJetton(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _tokenAddress = source.readAddress();
    return { $$type: 'VerifyJetton' as const, queryId: _queryId, tokenAddress: _tokenAddress };
}

function storeTupleVerifyJetton(source: VerifyJetton) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.tokenAddress);
    return builder.build();
}

function dictValueParserVerifyJetton(): DictionaryValue<VerifyJetton> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeVerifyJetton(src)).endCell());
        },
        parse: (src) => {
            return loadVerifyJetton(src.loadRef().beginParse());
        }
    }
}

export type JettonVerified = {
    $$type: 'JettonVerified';
    queryId: bigint;
    isJetton: boolean;
    tokenAddress: Address;
}

export function storeJettonVerified(src: JettonVerified) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1309512043, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeBit(src.isJetton);
        b_0.storeAddress(src.tokenAddress);
    };
}

export function loadJettonVerified(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1309512043) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _isJetton = sc_0.loadBit();
    let _tokenAddress = sc_0.loadAddress();
    return { $$type: 'JettonVerified' as const, queryId: _queryId, isJetton: _isJetton, tokenAddress: _tokenAddress };
}

function loadTupleJettonVerified(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _isJetton = source.readBoolean();
    let _tokenAddress = source.readAddress();
    return { $$type: 'JettonVerified' as const, queryId: _queryId, isJetton: _isJetton, tokenAddress: _tokenAddress };
}

function loadGetterTupleJettonVerified(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _isJetton = source.readBoolean();
    let _tokenAddress = source.readAddress();
    return { $$type: 'JettonVerified' as const, queryId: _queryId, isJetton: _isJetton, tokenAddress: _tokenAddress };
}

function storeTupleJettonVerified(source: JettonVerified) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeBoolean(source.isJetton);
    builder.writeAddress(source.tokenAddress);
    return builder.build();
}

function dictValueParserJettonVerified(): DictionaryValue<JettonVerified> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeJettonVerified(src)).endCell());
        },
        parse: (src) => {
            return loadJettonVerified(src.loadRef().beginParse());
        }
    }
}

export type BuyTokens = {
    $$type: 'BuyTokens';
    tokenAmount: bigint;
}

export function storeBuyTokens(src: BuyTokens) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1801330226, 32);
        b_0.storeInt(src.tokenAmount, 257);
    };
}

export function loadBuyTokens(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1801330226) { throw Error('Invalid prefix'); }
    let _tokenAmount = sc_0.loadIntBig(257);
    return { $$type: 'BuyTokens' as const, tokenAmount: _tokenAmount };
}

function loadTupleBuyTokens(source: TupleReader) {
    let _tokenAmount = source.readBigNumber();
    return { $$type: 'BuyTokens' as const, tokenAmount: _tokenAmount };
}

function loadGetterTupleBuyTokens(source: TupleReader) {
    let _tokenAmount = source.readBigNumber();
    return { $$type: 'BuyTokens' as const, tokenAmount: _tokenAmount };
}

function storeTupleBuyTokens(source: BuyTokens) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.tokenAmount);
    return builder.build();
}

function dictValueParserBuyTokens(): DictionaryValue<BuyTokens> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeBuyTokens(src)).endCell());
        },
        parse: (src) => {
            return loadBuyTokens(src.loadRef().beginParse());
        }
    }
}

export type SellTokens = {
    $$type: 'SellTokens';
    tokenAmount: bigint;
}

export function storeSellTokens(src: SellTokens) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1589364685, 32);
        b_0.storeInt(src.tokenAmount, 257);
    };
}

export function loadSellTokens(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1589364685) { throw Error('Invalid prefix'); }
    let _tokenAmount = sc_0.loadIntBig(257);
    return { $$type: 'SellTokens' as const, tokenAmount: _tokenAmount };
}

function loadTupleSellTokens(source: TupleReader) {
    let _tokenAmount = source.readBigNumber();
    return { $$type: 'SellTokens' as const, tokenAmount: _tokenAmount };
}

function loadGetterTupleSellTokens(source: TupleReader) {
    let _tokenAmount = source.readBigNumber();
    return { $$type: 'SellTokens' as const, tokenAmount: _tokenAmount };
}

function storeTupleSellTokens(source: SellTokens) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.tokenAmount);
    return builder.build();
}

function dictValueParserSellTokens(): DictionaryValue<SellTokens> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSellTokens(src)).endCell());
        },
        parse: (src) => {
            return loadSellTokens(src.loadRef().beginParse());
        }
    }
}

export type PoolBuy = {
    $$type: 'PoolBuy';
    jettonAddress: Address;
    amount: bigint;
}

export function storePoolBuy(src: PoolBuy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(350941107, 32);
        b_0.storeAddress(src.jettonAddress);
        b_0.storeCoins(src.amount);
    };
}

export function loadPoolBuy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 350941107) { throw Error('Invalid prefix'); }
    let _jettonAddress = sc_0.loadAddress();
    let _amount = sc_0.loadCoins();
    return { $$type: 'PoolBuy' as const, jettonAddress: _jettonAddress, amount: _amount };
}

function loadTuplePoolBuy(source: TupleReader) {
    let _jettonAddress = source.readAddress();
    let _amount = source.readBigNumber();
    return { $$type: 'PoolBuy' as const, jettonAddress: _jettonAddress, amount: _amount };
}

function loadGetterTuplePoolBuy(source: TupleReader) {
    let _jettonAddress = source.readAddress();
    let _amount = source.readBigNumber();
    return { $$type: 'PoolBuy' as const, jettonAddress: _jettonAddress, amount: _amount };
}

function storeTuplePoolBuy(source: PoolBuy) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.jettonAddress);
    builder.writeNumber(source.amount);
    return builder.build();
}

function dictValueParserPoolBuy(): DictionaryValue<PoolBuy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storePoolBuy(src)).endCell());
        },
        parse: (src) => {
            return loadPoolBuy(src.loadRef().beginParse());
        }
    }
}

export type PoolSell = {
    $$type: 'PoolSell';
    jettonAddress: Address;
    to: Address;
    amount: bigint;
}

export function storePoolSell(src: PoolSell) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2040629039, 32);
        b_0.storeAddress(src.jettonAddress);
        b_0.storeAddress(src.to);
        b_0.storeCoins(src.amount);
    };
}

export function loadPoolSell(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2040629039) { throw Error('Invalid prefix'); }
    let _jettonAddress = sc_0.loadAddress();
    let _to = sc_0.loadAddress();
    let _amount = sc_0.loadCoins();
    return { $$type: 'PoolSell' as const, jettonAddress: _jettonAddress, to: _to, amount: _amount };
}

function loadTuplePoolSell(source: TupleReader) {
    let _jettonAddress = source.readAddress();
    let _to = source.readAddress();
    let _amount = source.readBigNumber();
    return { $$type: 'PoolSell' as const, jettonAddress: _jettonAddress, to: _to, amount: _amount };
}

function loadGetterTuplePoolSell(source: TupleReader) {
    let _jettonAddress = source.readAddress();
    let _to = source.readAddress();
    let _amount = source.readBigNumber();
    return { $$type: 'PoolSell' as const, jettonAddress: _jettonAddress, to: _to, amount: _amount };
}

function storeTuplePoolSell(source: PoolSell) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.jettonAddress);
    builder.writeAddress(source.to);
    builder.writeNumber(source.amount);
    return builder.build();
}

function dictValueParserPoolSell(): DictionaryValue<PoolSell> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storePoolSell(src)).endCell());
        },
        parse: (src) => {
            return loadPoolSell(src.loadRef().beginParse());
        }
    }
}

export type AddJetton = {
    $$type: 'AddJetton';
    jettonAddress: Address;
}

export function storeAddJetton(src: AddJetton) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1824497237, 32);
        b_0.storeAddress(src.jettonAddress);
    };
}

export function loadAddJetton(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1824497237) { throw Error('Invalid prefix'); }
    let _jettonAddress = sc_0.loadAddress();
    return { $$type: 'AddJetton' as const, jettonAddress: _jettonAddress };
}

function loadTupleAddJetton(source: TupleReader) {
    let _jettonAddress = source.readAddress();
    return { $$type: 'AddJetton' as const, jettonAddress: _jettonAddress };
}

function loadGetterTupleAddJetton(source: TupleReader) {
    let _jettonAddress = source.readAddress();
    return { $$type: 'AddJetton' as const, jettonAddress: _jettonAddress };
}

function storeTupleAddJetton(source: AddJetton) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.jettonAddress);
    return builder.build();
}

function dictValueParserAddJetton(): DictionaryValue<AddJetton> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeAddJetton(src)).endCell());
        },
        parse: (src) => {
            return loadAddJetton(src.loadRef().beginParse());
        }
    }
}

export type TransferOwnership = {
    $$type: 'TransferOwnership';
    newOwner: Address;
}

export function storeTransferOwnership(src: TransferOwnership) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1882669034, 32);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadTransferOwnership(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1882669034) { throw Error('Invalid prefix'); }
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'TransferOwnership' as const, newOwner: _newOwner };
}

function loadTupleTransferOwnership(source: TupleReader) {
    let _newOwner = source.readAddress();
    return { $$type: 'TransferOwnership' as const, newOwner: _newOwner };
}

function loadGetterTupleTransferOwnership(source: TupleReader) {
    let _newOwner = source.readAddress();
    return { $$type: 'TransferOwnership' as const, newOwner: _newOwner };
}

function storeTupleTransferOwnership(source: TransferOwnership) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserTransferOwnership(): DictionaryValue<TransferOwnership> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTransferOwnership(src)).endCell());
        },
        parse: (src) => {
            return loadTransferOwnership(src.loadRef().beginParse());
        }
    }
}

export type JettonCore$Data = {
    $$type: 'JettonCore$Data';
    total_supply: bigint;
    owner: Address;
    jetton_content: Cell;
    mintable: boolean;
    max_supply: bigint;
    initial_token_price: bigint;
    curve_steepness: bigint;
    base_amount: bigint;
    pool: Address;
}

export function storeJettonCore$Data(src: JettonCore$Data) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeCoins(src.total_supply);
        b_0.storeAddress(src.owner);
        b_0.storeRef(src.jetton_content);
        b_0.storeBit(src.mintable);
        b_0.storeCoins(src.max_supply);
        b_0.storeCoins(src.initial_token_price);
        b_0.storeInt(src.curve_steepness, 257);
        b_0.storeCoins(src.base_amount);
        let b_1 = new Builder();
        b_1.storeAddress(src.pool);
        b_0.storeRef(b_1.endCell());
    };
}

export function loadJettonCore$Data(slice: Slice) {
    let sc_0 = slice;
    let _total_supply = sc_0.loadCoins();
    let _owner = sc_0.loadAddress();
    let _jetton_content = sc_0.loadRef();
    let _mintable = sc_0.loadBit();
    let _max_supply = sc_0.loadCoins();
    let _initial_token_price = sc_0.loadCoins();
    let _curve_steepness = sc_0.loadIntBig(257);
    let _base_amount = sc_0.loadCoins();
    let sc_1 = sc_0.loadRef().beginParse();
    let _pool = sc_1.loadAddress();
    return { $$type: 'JettonCore$Data' as const, total_supply: _total_supply, owner: _owner, jetton_content: _jetton_content, mintable: _mintable, max_supply: _max_supply, initial_token_price: _initial_token_price, curve_steepness: _curve_steepness, base_amount: _base_amount, pool: _pool };
}

function loadTupleJettonCore$Data(source: TupleReader) {
    let _total_supply = source.readBigNumber();
    let _owner = source.readAddress();
    let _jetton_content = source.readCell();
    let _mintable = source.readBoolean();
    let _max_supply = source.readBigNumber();
    let _initial_token_price = source.readBigNumber();
    let _curve_steepness = source.readBigNumber();
    let _base_amount = source.readBigNumber();
    let _pool = source.readAddress();
    return { $$type: 'JettonCore$Data' as const, total_supply: _total_supply, owner: _owner, jetton_content: _jetton_content, mintable: _mintable, max_supply: _max_supply, initial_token_price: _initial_token_price, curve_steepness: _curve_steepness, base_amount: _base_amount, pool: _pool };
}

function loadGetterTupleJettonCore$Data(source: TupleReader) {
    let _total_supply = source.readBigNumber();
    let _owner = source.readAddress();
    let _jetton_content = source.readCell();
    let _mintable = source.readBoolean();
    let _max_supply = source.readBigNumber();
    let _initial_token_price = source.readBigNumber();
    let _curve_steepness = source.readBigNumber();
    let _base_amount = source.readBigNumber();
    let _pool = source.readAddress();
    return { $$type: 'JettonCore$Data' as const, total_supply: _total_supply, owner: _owner, jetton_content: _jetton_content, mintable: _mintable, max_supply: _max_supply, initial_token_price: _initial_token_price, curve_steepness: _curve_steepness, base_amount: _base_amount, pool: _pool };
}

function storeTupleJettonCore$Data(source: JettonCore$Data) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.total_supply);
    builder.writeAddress(source.owner);
    builder.writeCell(source.jetton_content);
    builder.writeBoolean(source.mintable);
    builder.writeNumber(source.max_supply);
    builder.writeNumber(source.initial_token_price);
    builder.writeNumber(source.curve_steepness);
    builder.writeNumber(source.base_amount);
    builder.writeAddress(source.pool);
    return builder.build();
}

function dictValueParserJettonCore$Data(): DictionaryValue<JettonCore$Data> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeJettonCore$Data(src)).endCell());
        },
        parse: (src) => {
            return loadJettonCore$Data(src.loadRef().beginParse());
        }
    }
}

export type JettonWalletImp$Data = {
    $$type: 'JettonWalletImp$Data';
    balance: bigint;
    owner: Address;
    jetton_master: Address;
}

export function storeJettonWalletImp$Data(src: JettonWalletImp$Data) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeCoins(src.balance);
        b_0.storeAddress(src.owner);
        b_0.storeAddress(src.jetton_master);
    };
}

export function loadJettonWalletImp$Data(slice: Slice) {
    let sc_0 = slice;
    let _balance = sc_0.loadCoins();
    let _owner = sc_0.loadAddress();
    let _jetton_master = sc_0.loadAddress();
    return { $$type: 'JettonWalletImp$Data' as const, balance: _balance, owner: _owner, jetton_master: _jetton_master };
}

function loadTupleJettonWalletImp$Data(source: TupleReader) {
    let _balance = source.readBigNumber();
    let _owner = source.readAddress();
    let _jetton_master = source.readAddress();
    return { $$type: 'JettonWalletImp$Data' as const, balance: _balance, owner: _owner, jetton_master: _jetton_master };
}

function loadGetterTupleJettonWalletImp$Data(source: TupleReader) {
    let _balance = source.readBigNumber();
    let _owner = source.readAddress();
    let _jetton_master = source.readAddress();
    return { $$type: 'JettonWalletImp$Data' as const, balance: _balance, owner: _owner, jetton_master: _jetton_master };
}

function storeTupleJettonWalletImp$Data(source: JettonWalletImp$Data) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.balance);
    builder.writeAddress(source.owner);
    builder.writeAddress(source.jetton_master);
    return builder.build();
}

function dictValueParserJettonWalletImp$Data(): DictionaryValue<JettonWalletImp$Data> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeJettonWalletImp$Data(src)).endCell());
        },
        parse: (src) => {
            return loadJettonWalletImp$Data(src.loadRef().beginParse());
        }
    }
}

 type JettonCore_init_args = {
    $$type: 'JettonCore_init_args';
    owner: Address;
    content: Cell;
    max_supply: bigint;
    token_price: bigint;
    initial_mint: bigint;
    pool: Address;
}

function initJettonCore_init_args(src: JettonCore_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.owner);
        b_0.storeRef(src.content);
        b_0.storeInt(src.max_supply, 257);
        b_0.storeInt(src.token_price, 257);
        let b_1 = new Builder();
        b_1.storeInt(src.initial_mint, 257);
        b_1.storeAddress(src.pool);
        b_0.storeRef(b_1.endCell());
    };
}

async function JettonCore_init(owner: Address, content: Cell, max_supply: bigint, token_price: bigint, initial_mint: bigint, pool: Address) {
    const __code = Cell.fromBase64('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');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initJettonCore_init_args({ $$type: 'JettonCore_init_args', owner, content, max_supply, token_price, initial_mint, pool })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const JettonCore_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack underflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    11: { message: `'Unknown' error` },
    12: { message: `Fatal error` },
    13: { message: `Out of gas error` },
    14: { message: `Virtualization error` },
    32: { message: `Action list is invalid` },
    33: { message: `Action list is too long` },
    34: { message: `Action is invalid or not supported` },
    35: { message: `Invalid source address in outbound message` },
    36: { message: `Invalid destination address in outbound message` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    39: { message: `Outbound message does not fit into a cell after rewriting` },
    40: { message: `Cannot process a message` },
    41: { message: `Library reference is null` },
    42: { message: `Library change action error` },
    43: { message: `Exceeded maximum number of cells in the library or the maximum depth of the Merkle tree` },
    50: { message: `Account state size exceeded limits` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    2296: { message: `JettonWallet: Only Jetton master or Jetton wallet can call this function` },
    9739: { message: `Sender is not a Jetton wallet` },
    13105: { message: `JettonWallet: Not enough jettons to transfer` },
    14796: { message: `Exceeds max supply` },
    26288: { message: `Minting is disabled` },
    27544: { message: `Invalid mint amount` },
    29133: { message: `JettonWallet: Not allow negative balance after internal transfer` },
    29951: { message: `Purchase amount must be greater than 0` },
    30061: { message: `JettonMaster: Jetton is not mintable` },
    37185: { message: `Not enough funds to transfer` },
    40476: { message: `Amount must be greater than 0` },
    42931: { message: `Not authorized to transfer ownership` },
    43365: { message: `JettonMaster: Sender is not a Jetton owner` },
    45823: { message: `Too many tokens per transaction` },
    47048: { message: `JettonWallet: Only owner can burn tokens` },
    50816: { message: `Max supply must be greater than 0` },
    54531: { message: `Invalid initial mint amount` },
    55405: { message: `Amount after fees must be greater than 0` },
    57579: { message: `Only owner can mint` },
    57646: { message: `Amount too small to mint tokens` },
    58297: { message: `Purchase would exceed max supply` },
    58582: { message: `JettonWallet: Only owner can call this function` },
    58866: { message: `Token price must be greater than 0` },
    60354: { message: `JettonWallet: Not enough balance to burn tokens` },
}

const JettonCore_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"StdAddress","header":null,"fields":[{"name":"workchain","type":{"kind":"simple","type":"int","optional":false,"format":8}},{"name":"address","type":{"kind":"simple","type":"uint","optional":false,"format":256}}]},
    {"name":"VarAddress","header":null,"fields":[{"name":"workchain","type":{"kind":"simple","type":"int","optional":false,"format":32}},{"name":"address","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"JettonMint","header":2310479113,"fields":[{"name":"origin","type":{"kind":"simple","type":"address","optional":false}},{"name":"receiver","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"custom_payload","type":{"kind":"simple","type":"cell","optional":true}},{"name":"forward_ton_amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"forward_payload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"JettonData","header":null,"fields":[{"name":"total_supply","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mintable","type":{"kind":"simple","type":"bool","optional":false}},{"name":"admin_address","type":{"kind":"simple","type":"address","optional":false}},{"name":"jetton_content","type":{"kind":"simple","type":"cell","optional":false}},{"name":"jetton_wallet_code","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"JettonTransfer","header":260734629,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"destination","type":{"kind":"simple","type":"address","optional":false}},{"name":"response_destination","type":{"kind":"simple","type":"address","optional":false}},{"name":"custom_payload","type":{"kind":"simple","type":"cell","optional":true}},{"name":"forward_ton_amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"forward_payload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"JettonTransferNotification","header":1935855772,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"forward_payload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"JettonBurn","header":1499400124,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"response_destination","type":{"kind":"simple","type":"address","optional":false}},{"name":"custom_payload","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"JettonExcesses","header":3576854235,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"JettonInternalTransfer","header":395134233,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"from","type":{"kind":"simple","type":"address","optional":false}},{"name":"response_address","type":{"kind":"simple","type":"address","optional":true}},{"name":"forward_ton_amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"forward_payload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"JettonBurnNotification","header":2078119902,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"response_destination","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"WalletData","header":null,"fields":[{"name":"balance","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"jetton","type":{"kind":"simple","type":"address","optional":false}},{"name":"jetton_wallet_code","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"RegisterToken","header":394751612,"fields":[{"name":"tokenAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"VerifyJetton","header":1099595772,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"tokenAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"JettonVerified","header":1309512043,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"isJetton","type":{"kind":"simple","type":"bool","optional":false}},{"name":"tokenAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"BuyTokens","header":1801330226,"fields":[{"name":"tokenAmount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"SellTokens","header":1589364685,"fields":[{"name":"tokenAmount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"PoolBuy","header":350941107,"fields":[{"name":"jettonAddress","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"PoolSell","header":2040629039,"fields":[{"name":"jettonAddress","type":{"kind":"simple","type":"address","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"AddJetton","header":1824497237,"fields":[{"name":"jettonAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"TransferOwnership","header":1882669034,"fields":[{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"JettonCore$Data","header":null,"fields":[{"name":"total_supply","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"jetton_content","type":{"kind":"simple","type":"cell","optional":false}},{"name":"mintable","type":{"kind":"simple","type":"bool","optional":false}},{"name":"max_supply","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"initial_token_price","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"curve_steepness","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"base_amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"pool","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"JettonWalletImp$Data","header":null,"fields":[{"name":"balance","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"jetton_master","type":{"kind":"simple","type":"address","optional":false}}]},
]

const JettonCore_getters: ABIGetter[] = [
    {"name":"getPriceForAmount","arguments":[{"name":"purchase_amount","type":{"kind":"simple","type":"int","optional":false,"format":257}}],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"getTotalCostForAmount","arguments":[{"name":"purchase_amount","type":{"kind":"simple","type":"int","optional":false,"format":257}}],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"getCurrentPrice","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"getCurrentPrice2","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"getTotalSupplyInCoins","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"get_jetton_data","arguments":[],"returnType":{"kind":"simple","type":"JettonData","optional":false}},
    {"name":"get_wallet_address","arguments":[{"name":"owner_address","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"simple","type":"address","optional":false}},
]

export const JettonCore_getterMapping: { [key: string]: string } = {
    'getPriceForAmount': 'getGetPriceForAmount',
    'getTotalCostForAmount': 'getGetTotalCostForAmount',
    'getCurrentPrice': 'getGetCurrentPrice',
    'getCurrentPrice2': 'getGetCurrentPrice2',
    'getTotalSupplyInCoins': 'getGetTotalSupplyInCoins',
    'get_jetton_data': 'getGetJettonData',
    'get_wallet_address': 'getGetWalletAddress',
}

const JettonCore_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"BuyTokens"}},
    {"receiver":"internal","message":{"kind":"typed","type":"SellTokens"}},
    {"receiver":"internal","message":{"kind":"text","text":"Mint:Close"}},
    {"receiver":"internal","message":{"kind":"typed","type":"TransferOwnership"}},
    {"receiver":"internal","message":{"kind":"typed","type":"JettonMint"}},
    {"receiver":"internal","message":{"kind":"typed","type":"JettonBurnNotification"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class JettonCore implements Contract {
    
    static async init(owner: Address, content: Cell, max_supply: bigint, token_price: bigint, initial_mint: bigint, pool: Address) {
        return await JettonCore_init(owner, content, max_supply, token_price, initial_mint, pool);
    }
    
    static async fromInit(owner: Address, content: Cell, max_supply: bigint, token_price: bigint, initial_mint: bigint, pool: Address) {
        const init = await JettonCore_init(owner, content, max_supply, token_price, initial_mint, pool);
        const address = contractAddress(0, init);
        return new JettonCore(address, init);
    }
    
    static fromAddress(address: Address) {
        return new JettonCore(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  JettonCore_types,
        getters: JettonCore_getters,
        receivers: JettonCore_receivers,
        errors: JettonCore_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: BuyTokens | SellTokens | 'Mint:Close' | TransferOwnership | JettonMint | JettonBurnNotification | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'BuyTokens') {
            body = beginCell().store(storeBuyTokens(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'SellTokens') {
            body = beginCell().store(storeSellTokens(message)).endCell();
        }
        if (message === 'Mint:Close') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'TransferOwnership') {
            body = beginCell().store(storeTransferOwnership(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'JettonMint') {
            body = beginCell().store(storeJettonMint(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'JettonBurnNotification') {
            body = beginCell().store(storeJettonBurnNotification(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getGetPriceForAmount(provider: ContractProvider, purchase_amount: bigint) {
        let builder = new TupleBuilder();
        builder.writeNumber(purchase_amount);
        let source = (await provider.get('getPriceForAmount', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getGetTotalCostForAmount(provider: ContractProvider, purchase_amount: bigint) {
        let builder = new TupleBuilder();
        builder.writeNumber(purchase_amount);
        let source = (await provider.get('getTotalCostForAmount', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getGetCurrentPrice(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('getCurrentPrice', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getGetCurrentPrice2(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('getCurrentPrice2', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getGetTotalSupplyInCoins(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('getTotalSupplyInCoins', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getGetJettonData(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('get_jetton_data', builder.build())).stack;
        const result = loadGetterTupleJettonData(source);
        return result;
    }
    
    async getGetWalletAddress(provider: ContractProvider, owner_address: Address) {
        let builder = new TupleBuilder();
        builder.writeAddress(owner_address);
        let source = (await provider.get('get_wallet_address', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
}