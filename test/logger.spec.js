import assert from 'assert'
require('mocha-sinon')
import Logger from '../src'

describe('logger', function() {
  beforeEach(function() {
    this.sinon.spy(console, 'info')
    this.sinon.spy(console, 'warn')
    this.sinon.spy(console, 'error')
  })
  afterEach(function() {
    this.sinon.restore()
  })
  it('use process env set level', function() {
    assert.deepEqual(Logger.logLevel, Logger.OFF)
  })
  it('use string set level', function() {
    Logger.setLevel('INFO')
    assert.deepEqual(Logger.logLevel, Logger.INFO)
  })
  it('use instance set level', function() {
    Logger.setLevel(Logger.ERROR)
    assert.deepEqual(Logger.logLevel, Logger.ERROR)
  })
  it('logger info console', function() {
    Logger.setLevel('INFO')
    Logger.info('test')
    Logger.warn('test')
    Logger.error('test')
    assert(console.info.calledOnce)
    assert(console.warn.calledOnce)
    assert(console.error.calledOnce)
  })
  it('logger warn console', function() {
    Logger.setLevel('WARN')
    Logger.info('test')
    Logger.warn('test')
    Logger.error('test')
    assert(!console.info.calledOnce)
    assert(console.warn.calledOnce)
    assert(console.error.calledOnce)
  })
  it('logger error console', function() {
    Logger.setLevel('ERROR')
    Logger.info('test')
    Logger.warn('test')
    Logger.error('test')
    assert(!console.info.calledOnce)
    assert(!console.warn.calledOnce)
    assert(console.error.calledOnce)
  })
  it('logger off console', function() {
    Logger.setLevel('OFF')
    Logger.info('test')
    Logger.warn('test')
    Logger.error('test')
    assert(!console.info.calledOnce)
    assert(!console.warn.calledOnce)
    assert(!console.error.calledOnce)
  })
})
