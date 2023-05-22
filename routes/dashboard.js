const express = require('express')
const dashboardControllers = require('../controllers/dashboardControllers')

const router = express.Router()

//get widget data
router.get('/widget-data',dashboardControllers.getWidgetData)

//get ivr-call-trend data
router.get('/ivr-call',dashboardControllers.getIvrData)

//get ivr-call-trend data
router.get('/call-info',dashboardControllers.getCallInfoData)

//get queue-trend data
router.get('/queue',dashboardControllers.getQueueData)

//get call-dispo-trend data
router.get('/call-dispo',dashboardControllers.getCallDispoData)

//get call-ratio-trend data
router.get('/call-ratio',dashboardControllers.getCallRatioData)

//get lang-trend data
router.get('/lang',dashboardControllers.getLangData)

module.exports = router