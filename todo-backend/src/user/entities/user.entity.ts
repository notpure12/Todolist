import { Todo } from 'src/todo/entities/todo.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  role: string;

  // one user can have multipe todos
  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];
}
