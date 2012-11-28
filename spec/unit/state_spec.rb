require 'spec_helper'

describe AASM::SupportingClasses::State do
  before(:each) do
    @name    = :astate
    @options = { :crazy_custom_key => 'key' }
  end

  def new_state(options={})
    AASM::SupportingClasses::State.new(@name, @options.merge(options))
  end

  it 'should set the name' do
    state = new_state
    state.name.should == :astate
  end

  it 'should set the display_name from name' do
    new_state.display_name.should == 'Astate'
  end

  it 'should set the display_name from options' do
    new_state(:display => "A State").display_name.should == 'A State'
  end

  it 'should set the options and expose them as options' do
    new_state.options.should == @options
  end

  it 'should be equal to a symbol of the same name' do
    new_state.should == :astate
  end

  it 'should be equal to a State of the same name' do
    new_state.should == new_state
  end

  it 'should send a message to the record for an action if the action is present as a symbol' do
    state = new_state(:entering => :foo)

    record = mock('record')
    record.should_receive(:foo)

    state.fire_callbacks(:entering, record)
  end

  it 'should send a message to the record for an action if the action is present as a string' do
    state = new_state(:entering => 'foo')

    record = mock('record')
    record.should_receive(:foo)

    state.fire_callbacks(:entering, record)
  end

  it 'should send a message to the record for each action' do
    state = new_state(:entering => [:a, :b, "c", lambda {|r| r.foobar }])

    record = mock('record')
    record.should_receive(:a)
    record.should_receive(:b)
    record.should_receive(:c)
    record.should_receive(:foobar)

    state.fire_callbacks(:entering, record)
  end

  it "should stop calling actions if one of them raises :halt_aasm_chain" do
    state = new_state(:entering => [:a, :b, :c])

    record = mock('record')
    record.should_receive(:a)
    record.should_receive(:b).and_throw(:halt_aasm_chain)
    record.should_not_receive(:c)

    state.fire_callbacks(:entering, record)
  end

  it 'should call a proc, passing in the record for an action if the action is present' do
    state = new_state(:entering => Proc.new {|r| r.foobar})

    record = mock('record')
    record.should_receive(:foobar)

    state.fire_callbacks(:entering, record)
  end
end
