import * as React from 'react'
import {
    Container,
    ComposableContainer,
    ActionMap,
    SelectorMap,
} from 'constate'

import { Epic } from './types'
import {
    getQuarter,
    now,
    getQuarterMonths,
    getMonthsByQuarterAndYear,
} from './utility/index'

interface State {
    quarter: number
    year: number
    months: [number, number, number]
    epics: Epic[]
    columns: number[]
}

interface Actions {
    incrementQuarter: () => void
    decrementQuarter: () => void
    storeColumn: (index: number, value: number) => void
}

interface Selectors {
    getFiscalYear: () => string
    getMonthNames: () => [number, number, number]
}

const initialState: State = {
    quarter: getQuarter(now()),
    year: now().getFullYear(),
    months: getQuarterMonths(now()),
    epics: [],
    columns: [0, 0, 0],
}

const actions: ActionMap<State, Actions> = {
    incrementQuarter: () => state => {
        switch (state.quarter) {
            case 4:
                return {
                    quarter: 1,
                    year: state.year + 1,
                    months: getMonthsByQuarterAndYear(1, state.year + 1),
                }
            default:
                return {
                    quarter: state.quarter + 1,
                    months: getMonthsByQuarterAndYear(
                        state.quarter + 1,
                        state.year
                    ),
                }
        }
    },
    decrementQuarter: () => state => {
        switch (state.quarter) {
            case 1:
                return {
                    quarter: 4,
                    year: state.year - 1,
                    months: getMonthsByQuarterAndYear(4, state.year - 1),
                }
            default:
                return {
                    quarter: state.quarter - 1,
                    months: getMonthsByQuarterAndYear(
                        state.quarter - 1,
                        state.year
                    ),
                }
        }
    },
    storeColumn: (index: number, value: number) => state => {
        const newColumnData = state.columns
        newColumnData[index] = value

        return { ...state, ...newColumnData }
    },
}

const selectors: SelectorMap<State, Selectors> = {
    getFiscalYear: () => state => {
        const digits = state.year + 1
        return `FY${digits.toString().slice(2)}` // e.g. FY19
    },
    getMonthNames: () => state => {
        return getQuarterMonths(now())
    },
}

const GanttContainer: ComposableContainer<
    State,
    Actions,
    Selectors
> = props => (
    <Container
        {...props}
        initialState={{ ...initialState, ...props.initialState }}
        actions={actions}
        selectors={selectors}
        context="GanttContainer"
    />
)

export default GanttContainer
