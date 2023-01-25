package com.reminder.reminder.service;

import com.reminder.reminder.model.Memory;
import com.reminder.reminder.repository.MemoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemoryService {

    private final MemoryRepository memoryRepository;

    public List<Memory> getAllMemories() {
        return memoryRepository.findAll();
    }

    public Optional<Memory> getMemoryById(Long id) {
        return memoryRepository.findById(id);
    }

    public Memory createMemory(Memory memory) {
        return memoryRepository.save(memory);
    }

    public Memory updateMemory(Memory memory) {
        return memoryRepository.save(memory);
    }

    public void deleteMemory(Long id) {
        memoryRepository.deleteById(id);
    }
}
