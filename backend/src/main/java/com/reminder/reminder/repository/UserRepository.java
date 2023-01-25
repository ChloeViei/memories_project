package com.reminder.reminder.repository;

import com.reminder.reminder.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
