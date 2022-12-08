
import { addItem, removeItem, removeAllItems } from 'src/app/store/actions/order.actions';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Order } from 'src/app/model/order.model';

export interface OrderState {
    orders: Array<Order>
}

export const initialState = {
    orders: [] as any[]
};

const _orderReducer = createReducer(
    initialState,
    on(addItem, (state, order) => (Object.assign({}, state, { orders: [...state.orders, order] }))),
    on(removeItem, (state, order) => (Object.assign({}, state, {
        orders: state.orders.filter(item => item.order !== order)
    }))),
    on(removeAllItems, (state) => (Object.assign({}, state, { orders: [] })))
);

export function orderReducer(state: any, action: any) {
    return _orderReducer(state, action);
}
export const _getOrderState = createFeatureSelector<OrderState>('order');

export const getCartItems = createSelector(
    _getOrderState,
    (state: OrderState) => state.orders
);
