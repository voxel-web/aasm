var search_data = {"index":{"info":[["AASM","lib/aasm/state_transition.rb","classes/AASM.html"," < ","",1],["ClassMethods","AASM","classes/AASM/ClassMethods.html"," < ","",1],["InvalidTransition","AASM","classes/AASM/InvalidTransition.html"," < RuntimeError","",1],["Persistence","AASM","classes/AASM/Persistence.html"," < ","",1],["ActiveRecordPersistence","AASM::Persistence","classes/AASM/Persistence/ActiveRecordPersistence.html"," < ","",1],["ClassMethods","AASM::Persistence::ActiveRecordPersistence","classes/AASM/Persistence/ActiveRecordPersistence/ClassMethods.html"," < ","",1],["InstanceMethods","AASM::Persistence::ActiveRecordPersistence","classes/AASM/Persistence/ActiveRecordPersistence/InstanceMethods.html"," < ","",1],["NamedScopeMethods","AASM::Persistence::ActiveRecordPersistence","classes/AASM/Persistence/ActiveRecordPersistence/NamedScopeMethods.html"," < ","",1],["ReadState","AASM::Persistence::ActiveRecordPersistence","classes/AASM/Persistence/ActiveRecordPersistence/ReadState.html"," < ","",1],["WriteState","AASM::Persistence::ActiveRecordPersistence","classes/AASM/Persistence/ActiveRecordPersistence/WriteState.html"," < ","",1],["WriteStateWithoutPersistence","AASM::Persistence::ActiveRecordPersistence","classes/AASM/Persistence/ActiveRecordPersistence/WriteStateWithoutPersistence.html"," < ","",1],["StateMachine","AASM","classes/AASM/StateMachine.html"," < Object","",1],["SupportingClasses","AASM","classes/AASM/SupportingClasses.html"," < ","",1],["Event","AASM::SupportingClasses","classes/AASM/SupportingClasses/Event.html"," < Object","",1],["State","AASM::SupportingClasses","classes/AASM/SupportingClasses/State.html"," < Object","",1],["StateTransition","AASM::SupportingClasses","classes/AASM/SupportingClasses/StateTransition.html"," < Object","",1],["UndefinedState","AASM","classes/AASM/UndefinedState.html"," < RuntimeError","",1],["==","AASM::SupportingClasses::Event","classes/AASM/SupportingClasses/Event.html#M000020","(event)","",2],["==","AASM::SupportingClasses::State","classes/AASM/SupportingClasses/State.html#M000039","(state)","",2],["==","AASM::SupportingClasses::StateTransition","classes/AASM/SupportingClasses/StateTransition.html#M000057","(obj)","",2],["[]","AASM::StateMachine","classes/AASM/StateMachine.html#M000049","(*args)","",2],["[]=","AASM::StateMachine","classes/AASM/StateMachine.html#M000050","(*args)","",2],["aasm_column","AASM::Persistence::ActiveRecordPersistence::ClassMethods","classes/AASM/Persistence/ActiveRecordPersistence/ClassMethods.html#M000031","(column_name=nil)","Maps to the aasm_column in the database.  Deafults to \"aasm_state\".  You can write: create_table :foos",2],["aasm_current_state","AASM","classes/AASM.html#M000011","()","Instance methods ",2],["aasm_current_state","AASM::Persistence::ActiveRecordPersistence::InstanceMethods","classes/AASM/Persistence/ActiveRecordPersistence/InstanceMethods.html#M000037","()","Returns the current aasm_state of the object.  Respects reload and any changes made to the aasm_state",2],["aasm_enter_initial_state","AASM","classes/AASM.html#M000012","()","",2],["aasm_event","AASM::ClassMethods","classes/AASM/ClassMethods.html#M000005","(name, options = {}, &block)","",2],["aasm_events","AASM::ClassMethods","classes/AASM/ClassMethods.html#M000007","()","",2],["aasm_events_for_current_state","AASM","classes/AASM.html#M000015","()","",2],["aasm_events_for_state","AASM","classes/AASM.html#M000016","(state)","",2],["aasm_initial_state","AASM::ClassMethods","classes/AASM/ClassMethods.html#M000002","(set_state=nil)","",2],["aasm_initial_state=","AASM::ClassMethods","classes/AASM/ClassMethods.html#M000003","(state)","",2],["aasm_read_state","AASM::Persistence::ActiveRecordPersistence::ReadState","classes/AASM/Persistence/ActiveRecordPersistence/ReadState.html#M000047","()","Returns the value of the aasm_column - called from <tt>aasm_current_state</tt> If it's a new record,",2],["aasm_state","AASM::ClassMethods","classes/AASM/ClassMethods.html#M000004","(name, options={})","",2],["aasm_state_with_named_scope","AASM::Persistence::ActiveRecordPersistence::NamedScopeMethods","classes/AASM/Persistence/ActiveRecordPersistence/NamedScopeMethods.html#M000048","(name, options = {})","",2],["aasm_states","AASM::ClassMethods","classes/AASM/ClassMethods.html#M000006","()","",2],["aasm_states_for_select","AASM::ClassMethods","classes/AASM/ClassMethods.html#M000008","()","",2],["aasm_write_state","AASM::Persistence::ActiveRecordPersistence::WriteState","classes/AASM/Persistence/ActiveRecordPersistence/WriteState.html#M000044","(state)","Writes <tt>state</tt> to the state column and persists it to the database using update_attribute (which",2],["aasm_write_state_without_persistence","AASM::Persistence::ActiveRecordPersistence::WriteStateWithoutPersistence","classes/AASM/Persistence/ActiveRecordPersistence/WriteStateWithoutPersistence.html#M000043","(state)","Writes <tt>state</tt> to the state column, but does not persist it to the database foo = Foo.find(1)",2],["all_transitions","AASM::SupportingClasses::Event","classes/AASM/SupportingClasses/Event.html#M000018","()","",2],["calculate_in_state","AASM::Persistence::ActiveRecordPersistence::ClassMethods","classes/AASM/Persistence/ActiveRecordPersistence/ClassMethods.html#M000034","(state, *args)","",2],["call_action","AASM::SupportingClasses::Event","classes/AASM/SupportingClasses/Event.html#M000019","(action, record)","",2],["call_action","AASM::SupportingClasses::State","classes/AASM/SupportingClasses/State.html#M000040","(action, record)","",2],["clone","AASM::StateMachine","classes/AASM/StateMachine.html#M000052","()","",2],["count_in_state","AASM::Persistence::ActiveRecordPersistence::ClassMethods","classes/AASM/Persistence/ActiveRecordPersistence/ClassMethods.html#M000033","(state, *args)","",2],["create_state","AASM::StateMachine","classes/AASM/StateMachine.html#M000053","(name, options)","",2],["display_name","AASM::SupportingClasses::State","classes/AASM/SupportingClasses/State.html#M000041","()","",2],["execute","AASM::SupportingClasses::StateTransition","classes/AASM/SupportingClasses/StateTransition.html#M000056","(obj, *args)","",2],["execute_success_callback","AASM::SupportingClasses::Event","classes/AASM/SupportingClasses/Event.html#M000025","(obj, success = nil)","",2],["find_in_state","AASM::Persistence::ActiveRecordPersistence::ClassMethods","classes/AASM/Persistence/ActiveRecordPersistence/ClassMethods.html#M000032","(number, state, *args)","",2],["fire","AASM::SupportingClasses::Event","classes/AASM/SupportingClasses/Event.html#M000010","(obj, to_state=nil, *args)","",2],["for_select","AASM::SupportingClasses::State","classes/AASM/SupportingClasses/State.html#M000042","()","",2],["from?","AASM::SupportingClasses::StateTransition","classes/AASM/SupportingClasses/StateTransition.html#M000058","(value)","",2],["included","AASM::Persistence::ActiveRecordPersistence","classes/AASM/Persistence/ActiveRecordPersistence.html#M000029","(base)","This method: * extends the model with ClassMethods * includes InstanceMethods Unless the corresponding",2],["inherited","AASM::ClassMethods","classes/AASM/ClassMethods.html#M000001","(klass)","",2],["new","AASM::StateMachine","classes/AASM/StateMachine.html#M000051","(name)","",2],["new","AASM::SupportingClasses::Event","classes/AASM/SupportingClasses/Event.html#M000009","(name, options = {}, &block)","",2],["new","AASM::SupportingClasses::State","classes/AASM/SupportingClasses/State.html#M000036","(name, options={})","",2],["new","AASM::SupportingClasses::StateTransition","classes/AASM/SupportingClasses/StateTransition.html#M000054","(opts)","",2],["perform","AASM::SupportingClasses::StateTransition","classes/AASM/SupportingClasses/StateTransition.html#M000055","(obj)","",2],["set_persistence","AASM::Persistence","classes/AASM/Persistence.html#M000030","(base)","Checks to see this class or any of it's superclasses inherit from ActiveRecord::Base and if so includes",2],["transitions_from_state","AASM::SupportingClasses::Event","classes/AASM/SupportingClasses/Event.html#M000014","(state)","",2],["transitions_from_state?","AASM::SupportingClasses::Event","classes/AASM/SupportingClasses/Event.html#M000013","(state)","",2],["update","AASM::SupportingClasses::Event","classes/AASM/SupportingClasses/Event.html#M000021","(options = {}, &block)","",2],["update","AASM::SupportingClasses::State","classes/AASM/SupportingClasses/State.html#M000045","(options = {})","",2],["with_state_scope","AASM::Persistence::ActiveRecordPersistence::ClassMethods","classes/AASM/Persistence/ActiveRecordPersistence/ClassMethods.html#M000035","(state)","",2],["README.rdoc","files/README_rdoc.html","files/README_rdoc.html","","= AASM - Ruby state machines  This package contains AASM, a library for adding finite state machines",3],["aasm.rb","files/lib/aasm_rb.html","files/lib/aasm_rb.html","","",3],["aasm.rb","files/lib/aasm/aasm_rb.html","files/lib/aasm/aasm_rb.html","","",3],["event.rb","files/lib/aasm/event_rb.html","files/lib/aasm/event_rb.html","","",3],["persistence.rb","files/lib/aasm/persistence_rb.html","files/lib/aasm/persistence_rb.html","","",3],["active_record_persistence.rb","files/lib/aasm/persistence/active_record_persistence_rb.html","files/lib/aasm/persistence/active_record_persistence_rb.html","","",3],["state.rb","files/lib/aasm/state_rb.html","files/lib/aasm/state_rb.html","","",3],["state_machine.rb","files/lib/aasm/state_machine_rb.html","files/lib/aasm/state_machine_rb.html","","",3],["state_transition.rb","files/lib/aasm/state_transition_rb.html","files/lib/aasm/state_transition_rb.html","","",3]],"searchIndex":["aasm","classmethods","invalidtransition","persistence","activerecordpersistence","classmethods","instancemethods","namedscopemethods","readstate","writestate","writestatewithoutpersistence","statemachine","supportingclasses","event","state","statetransition","undefinedstate","==()","==()","==()","[]()","[]=()","aasm_column()","aasm_current_state()","aasm_current_state()","aasm_enter_initial_state()","aasm_event()","aasm_events()","aasm_events_for_current_state()","aasm_events_for_state()","aasm_initial_state()","aasm_initial_state=()","aasm_read_state()","aasm_state()","aasm_state_with_named_scope()","aasm_states()","aasm_states_for_select()","aasm_write_state()","aasm_write_state_without_persistence()","all_transitions()","calculate_in_state()","call_action()","call_action()","clone()","count_in_state()","create_state()","display_name()","execute()","execute_success_callback()","find_in_state()","fire()","for_select()","from?()","included()","inherited()","new()","new()","new()","new()","perform()","set_persistence()","transitions_from_state()","transitions_from_state?()","update()","update()","with_state_scope()","readme.rdoc","aasm.rb","aasm.rb","event.rb","persistence.rb","active_record_persistence.rb","state.rb","state_machine.rb","state_transition.rb"],"longSearchIndex":["lib/aasm/state_transition.rb","aasm","aasm","aasm","aasm::persistence","aasm::persistence::activerecordpersistence","aasm::persistence::activerecordpersistence","aasm::persistence::activerecordpersistence","aasm::persistence::activerecordpersistence","aasm::persistence::activerecordpersistence","aasm::persistence::activerecordpersistence","aasm","aasm","aasm::supportingclasses","aasm::supportingclasses","aasm::supportingclasses","aasm","aasm::supportingclasses::event","aasm::supportingclasses::state","aasm::supportingclasses::statetransition","aasm::statemachine","aasm::statemachine","aasm::persistence::activerecordpersistence::classmethods","aasm","aasm::persistence::activerecordpersistence::instancemethods","aasm","aasm::classmethods","aasm::classmethods","aasm","aasm","aasm::classmethods","aasm::classmethods","aasm::persistence::activerecordpersistence::readstate","aasm::classmethods","aasm::persistence::activerecordpersistence::namedscopemethods","aasm::classmethods","aasm::classmethods","aasm::persistence::activerecordpersistence::writestate","aasm::persistence::activerecordpersistence::writestatewithoutpersistence","aasm::supportingclasses::event","aasm::persistence::activerecordpersistence::classmethods","aasm::supportingclasses::event","aasm::supportingclasses::state","aasm::statemachine","aasm::persistence::activerecordpersistence::classmethods","aasm::statemachine","aasm::supportingclasses::state","aasm::supportingclasses::statetransition","aasm::supportingclasses::event","aasm::persistence::activerecordpersistence::classmethods","aasm::supportingclasses::event","aasm::supportingclasses::state","aasm::supportingclasses::statetransition","aasm::persistence::activerecordpersistence","aasm::classmethods","aasm::statemachine","aasm::supportingclasses::event","aasm::supportingclasses::state","aasm::supportingclasses::statetransition","aasm::supportingclasses::statetransition","aasm::persistence","aasm::supportingclasses::event","aasm::supportingclasses::event","aasm::supportingclasses::event","aasm::supportingclasses::state","aasm::persistence::activerecordpersistence::classmethods","files/readme_rdoc.html","files/lib/aasm_rb.html","files/lib/aasm/aasm_rb.html","files/lib/aasm/event_rb.html","files/lib/aasm/persistence_rb.html","files/lib/aasm/persistence/active_record_persistence_rb.html","files/lib/aasm/state_rb.html","files/lib/aasm/state_machine_rb.html","files/lib/aasm/state_transition_rb.html"]}}