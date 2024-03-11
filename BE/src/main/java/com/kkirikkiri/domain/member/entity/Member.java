package com.kkirikkiri.domain.member.entity;

import static jakarta.persistence.GenerationType.IDENTITY;

import com.kkirikkiri.domain.member.entity.enums.EnglishLevel;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Member {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "member_idx")
    private Long idx;

    @Column(nullable = false, length = 10)
    private String id;

    @Column(nullable = false, length = 15)
    private String password;

    @Column(nullable = false)
    private String nickname;

    @Column(nullable = false)
    private Integer age;

    @Column(nullable = false)
    private EnglishLevel level;

    @Column
    private String thumbnail;


}
