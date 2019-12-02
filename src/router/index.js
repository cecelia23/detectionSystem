import Vue from 'vue'
import Router from 'vue-router'
import deviceManage from '../components/deviceManage'
import packageInspect from '../components/packageInspect'
import sequenceInspect from '../components/sequenceInspect'
import frequencyInspect from '../components/frequencyInspect'

Vue.use(Router)

const routes = [
    {
        path: '/',
        component: deviceManage,
        name: '设备管理',
        styleType: ''
    },
    {
        path: '/packageinspect',
        component: packageInspect,
        name: '流量包检测',
        styleType: ''
    },
    {
        path: '/sequenceinspect',
        component: sequenceInspect,
        name: '序列检测',
        styleType: ''
    },
    {
        path: '/frequencyinspect',
        component: frequencyInspect,
        name: '频率检测',
        styleType: ''
    }
]

export default routes