//package com.example.jwt;
//                              To chyba jest do usunięcia, bo WebSecurityConfig jest w dwóch miejscach!!!!
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
//
//
//
//@Configuration
//public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
//
//    @Bean
//    public PasswordEncoder getPasswordEncoder(){
//        return new BCryptPasswordEncoder();
//    }
//
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.inMemoryAuthentication().withUser(User.builder()
//                .username("admin")
//                .password(getPasswordEncoder().encode("admin"))
//                .roles("ADMIN"));
//    };
//
//    /* basic authentication configuration
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.csrf().disable();
//        http.authorizeRequests()
//                .antMatchers("/getSecuredMsg").hasAnyRole("ADMIN")
//                .and()
//                .formLogin()
//                .permitAll();
//    }
//    */
//
//    // JWT configuration
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.csrf().disable();
//        http.authorizeRequests()
//                .antMatchers("/getSecuredMsg").hasAnyRole("ADMIN")
//                .and()
//                .addFilter(new JSONWebTokenFilter(authenticationManager()));
//    }
//}
