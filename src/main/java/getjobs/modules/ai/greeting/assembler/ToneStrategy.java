package getjobs.modules.ai.greeting.assembler;


import getjobs.modules.ai.greeting.dto.GreetingParams;

public interface ToneStrategy {
    GreetingParams adjust(GreetingParams in);
}
