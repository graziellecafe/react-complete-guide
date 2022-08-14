// quando renderizo um formulário onde os usuários podem inserir seus dados de despesa

import React from 'react'; 
import './NewExpense.css';
import ExpenseForm from './ExpenseForm'; 

const NewExpense = () => {
    return (
        <div className="new-expense">
            <ExpenseForm/>
        </div>
    )
};

export default NewExpense; 