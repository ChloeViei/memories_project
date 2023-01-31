package com.reminder.reminder.controller;

import com.reminder.reminder.model.Memory;
import com.reminder.reminder.service.MemoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/memories")
@RequiredArgsConstructor
public class MemoryController {

    private final MemoryService memoryService;

    @GetMapping
    public List<Memory> getMemories() {
        return memoryService.getAllMemories();
    }

    @GetMapping("/{id}")
    public Optional<Memory> getMemoryById(@PathVariable Long id) {
        return memoryService.getMemoryById(id);
    }

    @PostMapping
    public Memory createMemory(@RequestBody Memory memory) {
        return memoryService.createMemory(memory);
    }

    @PutMapping("/{id}")
    public Memory updateMemory(@PathVariable Long id, @RequestBody Memory memory){
        memory.setId(id);
        return memoryService.updateMemory(memory);
    }

    @DeleteMapping("/{id}")
    public void deleteMemory(@PathVariable Long id) {
        memoryService.deleteMemory(id);
    }
}
