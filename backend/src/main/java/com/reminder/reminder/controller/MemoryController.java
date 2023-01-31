package com.reminder.reminder.controller;

import com.reminder.reminder.model.Memory;
import com.reminder.reminder.service.MemoryService;
//import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1")
@RequiredArgsConstructor
//@Api(value = "Memory Controller", protocols = "http")
public class MemoryController {

    private final MemoryService memoryService;

    @GetMapping("/memories")
    public List<Memory> getMemories() {
        return memoryService.getAllMemories();
    }

    @PostMapping("/memories")
    public Memory createMemory(@RequestBody Memory memory) {
        return memoryService.createMemory(memory);
    }
}
