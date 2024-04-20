import React, { useState } from 'react';
import CheckboxTree from 'react-checkbox-tree';

const nodes = [
    {
        value: '113',
        label: 'Россия',
        children: [
            {
                value: '1620',
                label: 'Республика Марий Эл',
                children: [
                    { value: '4228', label: 'Виловатово' },
                    { value: '1621', label: 'Волжск' },
                    { value: '1622', label: 'Звенигово' },
                    { value: '4229', label: 'Знаменский' },
                    { value: '61', label: 'Йошкар-Ола' },
                ],
            },
            {
                value: '1624',
                label: 'Республика Татарстан',
                children: [
                    { value: '1625', label: 'Агрыз' },
                    { value: '1626', label: 'Азнакаево' },
                    { value: '4167', label: 'Айша' },
                    { value: '7193', label: 'Аккузово' },
                    { value: '4168', label: 'Аксубаево' },
                    { value: '3658', label: 'Актаныш' },
                ],
            },
            {
                value: '1646',
                label: 'Удмуртская Республика',
                children: [
                    { value: '4192', label: 'Алнаши' },
                    { value: '7057', label: 'Арзамасцево' },
                    { value: '7256', label: 'Бабино' },
                    { value: '3768', label: 'Балезино' },
                    { value: '7112', label: 'Балезино-3' },
                    { value: '7110', label: 'Большая Уча' },
                    { value: '7058', label: 'Большое Волково' },
                    { value: '4193', label: 'Большой Зетым' },
                ],
            },
            {
                value: '1652',
                label: 'Чувашская Республика',
                children: [
                    { value: '7232', label: 'Айбечи' },
                    { value: '7266', label: 'Аксарино' },
                    { value: '1653', label: 'Алатырь' },
                    { value: '4216', label: 'Аликово' },
                    { value: '7226', label: 'Алманчиково' },
                    { value: '7093', label: 'Алтышево' },
                ],
            },
        ],
    },
];

function BasicExample() {
    const [checked, setChecked] = useState([]);
    const [parentChecked, setParentChecked] = useState([]);
    const [labels, setLabels] = useState([]);
    const [expanded, setExpanded] = useState([]);
    const [text, setText] = useState('');

    const onCheck = (keys, node, parentKeys, labels) => {
        console.log(node);
        setLabels(labels);
        setChecked(keys);
        setParentChecked(parentKeys);
    };

    const onExpand = (value) => {
        setExpanded(value);
    };

    return (
        <>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <br />
            {parentChecked.join(', ')}
            <br />
            {labels.join(', ')}
            <br />
            <CheckboxTree
                checkModel='all'
                checked={checked}
                expanded={expanded}
                filterText={text}
                nodes={nodes}
                onCheck={onCheck}
                onExpand={onExpand}
            />
        </>

    );
}

export default BasicExample;
